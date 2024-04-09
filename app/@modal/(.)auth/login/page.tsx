"use client";
import { ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

import React, { useState } from "react";
import CardBackgroundForLightMode from "@/components/CardBackgroundForLightMode";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Email } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import { MotionButton } from "@/components/Motion";
import { loginByEmail } from "@/lib/actions";
import { useRouter } from "next/navigation";

const emailValidator = z.object({
  email: z
    .string({ required_error: "Please enter your email." })
    .email("It must be an email address"),
});
export default function ModalLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  type Email = {
    email: string;
  };

  const { handleSubmit, control } = useForm<Email>({
    resolver: zodResolver(emailValidator),
  });
  const {
    field: { disabled, ...other },
    fieldState: { invalid, isDirty, isTouched, isValidating, error },
  } = useController({ control, name: "email" });

  const onSubmit: SubmitHandler<Email> = async ({ email }) => {
    setIsLoading(true);
    await loginByEmail(email);
    setIsLoading(false);
  };
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <CardBackgroundForLightMode />
          <ModalHeader className="text-lg">Login</ModalHeader>
          <ModalBody
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-4"
          >
            <Input
              autoFocus
              isDisabled={disabled}
              isInvalid={invalid}
              variant="underlined"
              className="border-none"
              classNames={{
                errorMessage: "text-danger text-base",
                input: "border-none",
                label: ["text-sm", !!error ? "text-danger-900" : ""],
                inputWrapper: "w-auto",
              }}
              size="md"
              startContent={
                <Email
                  className={`size-6 ${!!error ? "fill-danger" : "fill-content4-foreground"}`}
                />
              }
              placeholder="Please enter your email address"
              label="Email"
              errorMessage={error?.message}
              {...other}
            />
            <div className="flex justify-between">
              <Button
                as={MotionButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                color="danger"
                variant="bordered"
                onPress={() => {
                  onClose();
                  router.back();
                }}
                type="button"
              >
                Cancel
              </Button>
              <Button
                as={MotionButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                color="success"
                variant="ghost"
                className="bg-success-200 !text-success-800 hover:bg-success-100 active:bg-success-50"
                isLoading={isLoading}
              >
                Login
              </Button>
            </div>
          </ModalBody>
        </>
      )}
    </ModalContent>
  );
}
