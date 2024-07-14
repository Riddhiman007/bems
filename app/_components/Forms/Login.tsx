"use client";
import React from "react";

// hooks
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { loginByEmail } from "@/_lib/actions";

import Input from "./Input";
import { CancelButton } from "../ui";
import { Button } from "@nextui-org/button";
import { MotionButton } from "../Motion";
import { LoginInput } from "@/_utils/types";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { LoginValidator } from "@/_utils/schema";

interface Props {
  /**
   * @default false
   */
  isModal?: { onClose: () => void } | false;
}

export default function LoginForm({ isModal }: Props) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginInput>({
    mode: "all",
    resolver: valibotResolver(LoginValidator),
  });
  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    await loginByEmail(data.email);
  };

  const onError: SubmitErrorHandler<LoginInput> = async (data) => console.log(data);

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit, onError)}>
      <Controller
        control={control}
        name="email"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <Input
            autoFocus
            errorMessage={error?.message || undefined}
            isRequired
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
            }}
            size="sm"
            labelPlacement="outside"
            variant="faded"
            fullWidth
            label="Email"
            type="email"
            placeholder="Please enter your email address"
            {...remainingProps}
          />
        )}
      />
      <div className={`flex flex-row ${isModal ? "justify-between" : "justify-end"}`}>
        {isModal && (
          <CancelButton isSubmitting={isSubmitting} onClose={isModal.onClose} />
        )}

        <Button
          as={MotionButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.15 }}
          color="success"
          variant="ghost"
          className="bg-success-200 !text-success-800 hover:bg-success-100 active:bg-success-50"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
