"use client";
import {
  Box,
  Button,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  stepConnectorClasses,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MotionButton from "@/components/Motion/MotionButton";
import { useRouter } from "next/navigation";
import PersonalForm from "./PersonalForm";
import ParentalForm from "./ParentalForm";
import Done from "./Done";
import { Student, StudentSchema } from "@/lib/prisma/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewStudent } from "@/lib/prisma/actions";

const steps = [
  { label: "Personal details", component: <PersonalForm /> },
  { label: "Parental details", component: <ParentalForm /> },
  { label: "Done", component: <Done /> },
];

export default function EnrollComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  const methods = useForm<Student>({
    reValidateMode: "onChange",
    resolver: zodResolver(StudentSchema),
  });

  const totalSteps = steps.length;
  const isFirstStep = activeStep === 0;
  const allStepsCompleted = activeStep === totalSteps - 1;

  const handleSubmitButtonClick = () => {
    allStepsCompleted ? undefined : setActiveStep((lastStep) => lastStep + 1);
  };

  const handleReturnButtonClick: () => void = () => {
    isFirstStep ? router.back() : setActiveStep((lastStep) => lastStep - 1);
  };

  const onSubmit: SubmitHandler<Student> = (data) => {
    console.log(data);
    createNewStudent({ ...data });
  };
  return (
    <>
      <Box className="flex flex-col justify-center gap-7">
        <Stepper
          orientation="horizontal"
          activeStep={activeStep}
          connector={
            <StepConnector
              classes={{
                completed: "border-green-600 text-green-600",
                active: "border-green-700 text-green-700",
              }}
              sx={{
                [`& .${stepConnectorClasses.completed}`]: {
                  borderColor: "rgb(22 163 74)!important",

                  color: "rgb(22 163 74)!important",
                },
                [`& .${stepConnectorClasses.active}`]: {
                  borderColor: "rgb(22 163 74)!important",
                  color: "rgb(22 163 74)!important",
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
                  classes: {
                    completed: "!text-green-500",
                    active: "!text-green-600 scale-110",
                    text: "!text-green-50",
                  },
                  // sx: {
                  //   [`& .${stepIconClasses.active}`]: {
                  //     scale: 1.1,
                  //     color: "rgb(21 168 61)!important",
                  //   },
                  //   [`& .${stepIconClasses.completed}`]: {
                  //     color: "rgb(34,197, 94) !important",
                  //   },
                  // },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <FormProvider<Student> {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-7">
            {steps[activeStep].component}
            <Box className="flex flex-row justify-between ">
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
              <Button
                component={MotionButton}
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                type={allStepsCompleted ? "submit" : "button"}
                className="rounded-md bg-green-700 px-4 py-2 text-green-50 hover:bg-green-900 "
                onClick={handleSubmitButtonClick}
              >
                {allStepsCompleted ? "Finish" : "Next"}
              </Button>
            </Box>
          </form>
          <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
        </FormProvider>
      </Box>
    </>
  );
}
