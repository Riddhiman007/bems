"use client";
import React, { useState } from "react";
import AnimatePresence from "../Motion/AnimatePresence";

// hooks
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { loginByEmail } from "@/_lib/actions";

import Input from "./Input";
import { Email } from "@mui/icons-material";
import { CancelButton } from "../ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email address." })
    .email({ message: "Please enter your email address correctly." }),
});

type LoginValidator = z.infer<typeof loginSchema>;
export default function LoginForm({
  isBackButtonEnabled,
}: {
  isBackButtonEnabled: boolean;
}) {
  const {
    control,
    handleSubmit,
    formState: { isLoading },
  } = useForm<LoginValidator>({
    shouldUseNativeValidation: false,
    mode: "all",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginValidator> = async (data) => {
    await loginByEmail(data.email);
  };

  const onError: SubmitErrorHandler<LoginValidator> = async (data) => console.log(data);

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit, onError)}>
      <Controller
        control={control}
        name="email"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <Input
            errorMessage={error && <p className="text-red-600">{error.message}</p>}
            isRequired
            classNames={{ innerWrapper: "w-[-webkit-fill-available]" }}
            size="md"
            variant="faded"
            fullWidth
            label="Email"
            type="email"
            placeholder="Please enter your email address"
            {...remainingProps}
          />
        )}
      />
      <div
        className={`flex flex-row ${
          isBackButtonEnabled ? "justify-between" : "justify-end"
        }`}
      >
        {isBackButtonEnabled && <CancelButton />}
        <AnimatePresence>
          <Button
            className="bg-success px-4 py-2 text-success-foreground"
            isLoading={isLoading}
          >
            Login
          </Button>
        </AnimatePresence>
      </div>
    </form>
  );
}
