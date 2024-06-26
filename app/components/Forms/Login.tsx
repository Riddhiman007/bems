"use client";
import React, { useState } from "react";
import { CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import MotionButton from "../Motion/MotionButton";
import AnimatePresence from "../Motion/AnimatePresence";

// hooks
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { loginByEmail } from "@/lib/actions";
import { Email } from "@mui/icons-material";
import CancelButton from "../CancelButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MotionMuiBotton from "../Motion/MotionMuiButton";

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
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<LoginValidator>({
    shouldUseNativeValidation: false,
    mode: "all",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginValidator> = async (data) => {
    setTimeout(() => setIsLoading(true), 500);
    await loginByEmail(data.email);
    setIsLoading(false);
  };

  const onError: SubmitErrorHandler<LoginValidator> = async (data) => console.log(data);

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit, onError)}>
      <Controller
        control={control}
        name="email"
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            error={Boolean(error)}
            helperText={
              error && <Typography className="text-red-600">{error.message}</Typography>
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email className="h-4 w-4 dark:text-slate-50" />
                </InputAdornment>
              ),
            }}
            required
            size="medium"
            variant="standard"
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
          <MotionMuiBotton
            type="submit"
            color="success"
            disabled={isLoading}
            className="flex flex-row gap-4 rounded-md !bg-green-700 px-4 py-2 text-green-50 shadow shadow-gray-900 hover:!bg-green-900 disabled:bg-green-900"
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              backgroundImage: "none",
              backgroundColor: "rgb(29 78 216)",
            }}
          >
            {isLoading && (
              <CircularProgress
                size={20}
                classes={{
                  circle: "text-green-50",
                }}
              />
            )}
            <Typography>Login</Typography>
          </MotionMuiBotton>
        </AnimatePresence>
      </div>
    </form>
  );
}
