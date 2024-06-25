import React, { useCallback, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MotionButton from "@/_components/Motion/MotionButton";
import { PersonalForm, ParentalForm } from "@/_components/EditStudent";

import { zodResolver } from "@hookform/resolvers/zod";
import { StudentFieldValidator, StudentFields, updateStudent } from "@/_lib/prisma";
import Stepper, { ItemProps } from "@/_components/Stepper";
import { Button } from "@nextui-org/button";
import EditComplete from "./EditComplete";

const steps: ItemProps[] = [
  { label: "Personal details", component: <PersonalForm formType="update" /> },
  { label: "Parental details", component: <ParentalForm /> },
  { label: "Done", component: <EditComplete /> },
];

export default function EditStudent({
  email,
  defaultValues,
  onClose,
}: {
  email: string;
  defaultValues?: Partial<StudentFields>;
  onClose: () => void;
}) {
  const editStudentForm = useRef<HTMLFormElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<StudentFields>({
    reValidateMode: "onBlur",
    mode: "all",
    resolver: zodResolver(StudentFieldValidator),
    defaultValues,
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
        // } else if (!isLastStep) {
        //
      } else if (isLastStep) {
        console.log(editStudentForm.current);

        editStudentForm.current?.requestSubmit();
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
    } else setActiveStep((lastStep) => lastStep - 1);
  }, [isFirstStep, allStepsCompleted]);

  const onSubmit: SubmitHandler<StudentFields> = async (data) => {
    console.log(data);
    await updateStudent(email, data);
    setActiveStep((lastStep) => lastStep + 1);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} ref={editStudentForm}>
        <Stepper items={steps} activeStep={activeStep} complete={allStepsCompleted}>
          <div className="flex flex-row justify-between">
            <Button
              variant="bordered"
              color="danger"
              type="button"
              onPress={handleReturnButtonClick}
              className="px-4 py-2"
              as={MotionButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.15 }}
            >
              {isFirstStep ? "Cancel" : allStepsCompleted ? "Return" : "Back"}
            </Button>
            <Button
              variant="ghost"
              color="success"
              className="bg-success-200 px-4 py-2 text-success-800"
              as={MotionButton}
              isLoading={isSubmitting}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.15 }}
              onClick={handleSubmitButtonClick}

              // type={isLastStep ? "submit" : "button"}
            >
              {allStepsCompleted ? "Done" : isLastStep ? "Edit" : "Next"}
            </Button>
          </div>
        </Stepper>
      </form>
    </FormProvider>
  );
}
