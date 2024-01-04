"use client";
import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import MotionButton from "../Motion/MotionButton";
import AnimatePresence from "../Motion/AnimatePresence";

// hooks
import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { LoginByEmail } from "@/lib/actions/queries";
import { Email } from "@mui/icons-material";
import CancelButton from "../CancelButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MotionMuiBotton from "../Motion/MotionMuiButton";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter correct email address." }),
});

type LoginValidator = z.infer<typeof loginSchema>;
export default function LoginForm({
  isBackButtonEnabled,
}: {
  isBackButtonEnabled: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<LoginValidator>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginValidator> = async (data) => {
    setTimeout(() => setIsLoading(true), 500);
    await LoginByEmail(data.email);
  };

  const onError: SubmitErrorHandler<LoginValidator> = async (data) => console.log(data);

  return (
    <form className="flex flex-col gap-7" onSubmit={handleSubmit(onSubmit, onError)}>
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { ref, ...remainingProps }, fieldState: { error } }) => (
          <TextField
            error={Boolean(error)}
            helperText={
              error && (
                <Typography className="text-red-600">
                  {error.type === "required" ? "Please fill this field" : ""}
                </Typography>
              )
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
      <Box
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
      </Box>
    </form>
  );
}
