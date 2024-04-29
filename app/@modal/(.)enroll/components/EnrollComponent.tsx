import React, { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MotionButton from "@/components/Motion/MotionButton";
import { useRouter } from "next/navigation";
import PersonalForm from "./PersonalForm";
import ParentalForm from "./ParentalForm";
import Done from "./Done";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDarkMode } from "@/contexts";
import { StudentFieldValidator, StudentFields, createNewStudent } from "@/lib/prisma";
import Stepper, { ItemProps } from "@/components/Stepper";
import { Button } from "@nextui-org/button";
import { LastPage } from "@mui/icons-material";

const steps: ItemProps[] = [
  { label: "Personal details", component: <PersonalForm /> },
  { label: "Parental details", component: <ParentalForm /> },
  { label: "Done", component: <Done /> },
];

export default function EnrollComponent() {
  const [activeStep, setActiveStep] = useState(0);
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
      // onClose();
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
    if (isFirstStep) {
      // onClose();
      router.back();
    } else setActiveStep((lastStep) => lastStep - 1);
  }, [isFirstStep, router]);

  const onSubmit = useCallback<SubmitHandler<StudentFields>>((data) => {
    console.log(data);
    createNewStudent(data);
    setActiveStep((lastStep) => lastStep + 1);
  }, []);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stepper items={steps} activeStep={activeStep} complete={allStepsCompleted}>
          <div className="flex flex-row justify-between">
            <Button
              variant="bordered"
              color="danger"
              type="button"
              onClick={handleReturnButtonClick}
              className="px-4 py-2"
              as={MotionButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.15 }}
            >
              {isFirstStep ? "Cancel" : "Back"}
            </Button>
            <Button
              variant="ghost"
              color="success"
              className="bg-success-200 px-4 py-2 text-success-800"
              as={MotionButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.15 }}
              onClick={handleSubmitButtonClick}
              type={isLastStep ? "submit" : "button"}
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </div>
        </Stepper>
      </form>
    </FormProvider>
  );
}
