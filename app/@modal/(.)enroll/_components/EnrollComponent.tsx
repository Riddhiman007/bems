import React, { useCallback, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MotionButton from "@/_components/Motion/MotionButton";
import { useRouter } from "next/navigation";
import { PersonalForm, ParentalForm } from "@/_components/EditStudent";
import Done from "./Done";
import { createNewStudent } from "@/_lib/prisma";
import Stepper, { ItemProps } from "@/_components/Stepper";
import { Button } from "@nextui-org/button";
import { StudentInput } from "@/_utils/types";
import { StudentFieldValidator } from "@/_utils/schema";
import { valibotResolver } from "@hookform/resolvers/valibot";

const steps: ItemProps[] = [
  { label: "Personal details", component: <PersonalForm formType="new" /> },
  { label: "Parental details", component: <ParentalForm /> },
  { label: "Done", component: <Done /> },
];

export default function EnrollComponent({ onClose }: { onClose: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  const enrollForm = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const methods = useForm<StudentInput>({
    reValidateMode: "onBlur",
    mode: "all",
    resolver: valibotResolver(StudentFieldValidator),
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
  } = methods;
  const totalSteps = steps.length;
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === totalSteps - 2;
  const allStepsCompleted = activeStep === totalSteps - 1;

  const handleSubmitButtonClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (allStepsCompleted) {
        onClose();
        setTimeout(() => router.back(), 500);
      } else if (isLastStep) {
        enrollForm.current?.requestSubmit();
      } else {
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
    },
    [allStepsCompleted, isLastStep],
  );

  const handleReturnButtonClick = useCallback(() => {
    if (isFirstStep || allStepsCompleted) {
      onClose();
      setTimeout(() => router.back(), 400);
    } else setActiveStep((lastStep) => lastStep - 1);
  }, [isFirstStep, router, allStepsCompleted]);

  const onSubmit = useCallback<SubmitHandler<StudentInput>>(async (data) => {
    console.log(data);
    await createNewStudent(data);
    setActiveStep((lastStep) => lastStep + 1);
  }, []);
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} ref={enrollForm}>
        <Stepper items={steps} activeStep={activeStep} complete={allStepsCompleted}>
          <div className="flex flex-row justify-between">
            <Button
              variant="bordered"
              isDisabled={isSubmitting}
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
              isLoading={isSubmitting}
              className="bg-success-200 px-4 py-2 text-success-800"
              as={MotionButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.15 }}
              onClick={handleSubmitButtonClick}
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </div>
        </Stepper>
      </form>
    </FormProvider>
  );
}
