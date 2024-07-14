"use client";
import MotionMuiButton from "@/_components/Motion/MotionMuiButton";
import { createNewExam } from "@/_lib/prisma";
import {
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  stepConnectorClasses,
  stepIconClasses,
} from "@mui/material";
import { GradeType } from "@prisma/client";
import React, { useState, createContext, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BasicInfo from "./BasicInfo";
import MarksChart from "./MarksChart";
import TimeTableChart from "./TimeTableChart";
import ExamCreationSuccessful from "./ExamCreationSuccessful";
import { useDarkMode } from "@/_contexts";
import { FormInput } from ".";
import { useRouter } from "next/navigation";

const ExamContext = createContext<{
  selectedGrades: GradeType[];
  setSelectedGrades: React.Dispatch<React.SetStateAction<GradeType[]>>;
  // eligibleGrades: GradeType[];
}>({
  selectedGrades: [],
  setSelectedGrades: () => {},
  // eligibleGrades: [],
});

const steps: { label: string; component: React.ReactNode }[] = [
  { label: "Basic info", component: <BasicInfo /> },
  {
    label: "Enter Marks",
    component: <MarksChart />,
  },
  { label: "Time table setup", component: <TimeTableChart /> },
];
export default function CreateExam() {
  const router = useRouter();
  const [selectedGrades, setSelectedGrades] = useState<GradeType[]>([]);
  const methods = useForm<FormInput>({ mode: "all" });
  const { handleSubmit, control, watch, getValues } = methods;
  const { isDark } = useDarkMode();

  const [activeStep, setActiveStep] = useState(0);

  const isFirstStep = () => activeStep === 0;
  const totalSteps = () => steps.length;
  const allStepsCompleted = () => totalSteps() === activeStep;
  const isLastStepCompleted = () => totalSteps() - 1 === activeStep;
  const handleBackClick = () => {
    if (isFirstStep()) {
      router.back();
    } else setActiveStep((activeStep) => activeStep - 1);
  };
  const handleNextStep = () => {
    if (!isLastStepCompleted() || allStepsCompleted())
      setActiveStep((activeStep) => activeStep + 1);
  };

  const onSubmit = async ({ exam, fromGrade, toGrade }: FormInput) => {
    await createNewExam({ exam_type: exam, fromGrade, toGrade });
  };

  return (
    <>
      <Stepper
        orientation="horizontal"
        activeStep={activeStep}
        connector={
          <StepConnector
            sx={{
              [`&.${stepConnectorClasses.completed}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                  borderColor: "rgb(22 163 74)!important",
                },
              },
              [`&.${stepConnectorClasses.active}`]: {
                [`& .${stepConnectorClasses.line}`]: {
                  borderColor: "rgb(22 163 74)!important",
                },
              },
            }}
          />
        }
        alternativeLabel
      >
        {steps.map(({ label }) => (
          <Step key={label}>
            <StepLabel
              StepIconProps={{
                sx: {
                  [`&.${stepIconClasses.active}`]: {
                    scale: 1.2,
                    color: "transparent !important",
                    borderColor: isDark
                      ? "rgb(74 222 128)!important"
                      : "rgb(21 168 61)!important",
                    border: "1px solid",
                    borderRadius: "990px",
                    [`& .${stepIconClasses.text}`]: {
                      fill: isDark
                        ? "rgb(74 222 128)!important"
                        : "rgb(21 168 61)!important",
                    },
                  },
                  [`&.${stepIconClasses.completed}`]: {
                    color: "rgb(34,197, 94) !important",
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="flex flex-col gap-4">
        <FormProvider {...methods}>
          <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit)}>
            <ExamContext.Provider value={{ selectedGrades, setSelectedGrades }}>
              {activeStep > 2 ? <ExamCreationSuccessful /> : steps[activeStep].component}
            </ExamContext.Provider>
            <div className="flex flex-row justify-between">
              <MotionMuiButton
                color="error"
                onClick={handleBackClick}
                variant="outlined"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                type="button"
                className="px-4 py-2"
              >
                {isFirstStep() ? "Cancel" : "Return"}
              </MotionMuiButton>
              <MotionMuiButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                onClick={handleNextStep}
                type={isLastStepCompleted() ? "submit" : "button"}
                variant="contained"
                className=" bg-green-700 px-4 py-2 text-green-50"
              >
                {isLastStepCompleted() ? "Finish" : "Next"}
              </MotionMuiButton>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export const useExamContext = () => {
  return useContext(ExamContext);
};
