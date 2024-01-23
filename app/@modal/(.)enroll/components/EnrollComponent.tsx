"use client";
import {
  Box,
  Button,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  stepConnectorClasses,
  stepIconClasses,
  styled,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MotionButton from "@/components/Motion/MotionButton";
import { useRouter } from "next/navigation";
import PersonalForm from "./PersonalForm";
import ParentalForm from "./ParentalForm";
import Done from "./Done";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewStudent } from "@/lib/prisma/actions";
import { useDarkMode } from "@/contexts";
import { StudentFieldValidator, StudentFields } from "@/lib/prisma";

const steps = [
  { label: "Personal details", component: <PersonalForm /> },
  { label: "Parental details", component: <ParentalForm /> },
  { label: "Done", component: <Done /> },
];

export default function EnrollComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const { isDark } = useDarkMode();
  const router = useRouter();
  const methods = useForm<StudentFields>({
    reValidateMode: "onBlur",
    mode: "all",
    resolver: zodResolver(StudentFieldValidator),
  });

  const { handleSubmit, trigger } = methods;
  const totalSteps = steps.length;
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === totalSteps - 2;
  const allStepsCompleted = activeStep === totalSteps - 1;

  const handleSubmitButtonClick = useCallback(async () => {
    if (allStepsCompleted) {
      router.back();
    } else if (!isLastStep) {
      const isCorrect = await trigger([
        "gender",
        "grade",
        "fullname",
        "email",
        "contact",
      ]);
      if (isCorrect) {
        setActiveStep((lastStep) => lastStep + 1);
      }
    }
  }, [allStepsCompleted, isLastStep, router, trigger]);

  const handleReturnButtonClick = useCallback(() => {
    isFirstStep ? router.back() : setActiveStep((lastStep) => lastStep - 1);
  }, [isFirstStep, router]);

  const onSubmit = useCallback<SubmitHandler<StudentFields>>((data) => {
    console.log(data);
    createNewStudent(data);
    setActiveStep((lastStep) => lastStep + 1);
  }, []);
  return (
    <>
      <Box className="flex flex-col justify-center gap-7">
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
        <FormProvider<StudentFields> {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
            className="flex flex-col gap-7"
          >
            {steps[activeStep].component}
            <Box
              className={`flex flex-row ${
                allStepsCompleted ? "justify-end" : "justify-between"
              } `}
            >
              {!allStepsCompleted && (
                <Button
                  type="button"
                  onClick={handleReturnButtonClick}
                  component={MotionButton}
                  initial={{ opacity: 0, y: 400 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  variant="outlined"
                  className="rounded-md px-4 py-2 "
                  color="error"
                >
                  {isFirstStep ? "Cancel" : "Back"}
                </Button>
              )}
              <Button
                component={MotionButton}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                type={isLastStep ? "submit" : "button"}
                className="rounded-md bg-green-700 px-4 py-2 text-green-50 hover:bg-green-900 "
                onClick={handleSubmitButtonClick}
              >
                {isLastStep ? "Finish" : allStepsCompleted ? "Done" : "Next"}
              </Button>
            </Box>
          </form>
          {/* <pre>{JSON.stringify(methods.watch(), null, 2)}</pre> */}
        </FormProvider>
      </Box>
    </>
  );
}
