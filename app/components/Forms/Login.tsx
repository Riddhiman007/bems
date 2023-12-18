"use client";
import React from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import MotionButton from "../Motion/MotionButton";
import AnimatePresence from "../Motion/AnimatePresence";

// hooks
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { UserIcon } from "@heroicons/react/24/solid";
import { LoginByEmail, LoginByUsername } from "@/lib/actions/queries";
import { Email } from "@mui/icons-material";

export default function LoginForm({
  isBackButtonEnabled,
}: {
  isBackButtonEnabled: boolean;
}) {
  const router = useRouter();
  const { handleSubmit, register } = useForm();

  return (
    <form className="flex flex-col gap-7" action={LoginByUsername}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <UserIcon className="h-4 w-4 dark:text-slate-50" />
            </InputAdornment>
          ),
        }}
        name="username"
        size="medium"
        variant="standard"
        fullWidth
        label="Username"
        type="text"
        placeholder="Please enter your username"
      />
      <Box
        className={`flex flex-row ${
          isBackButtonEnabled ? "justify-between" : "justify-end"
        }`}
      >
        {isBackButtonEnabled && (
          <Button
            type="button"
            onClick={() => router.back()}
            component={MotionButton}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            variant="outlined"
            className="rounded-md px-4 py-2 "
            color="error"
          >
            Cancel
          </Button>
        )}
        <AnimatePresence>
          <Button
            component={MotionButton}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              backgroundImage: null,
              backgroundColor: "rgb(29 78 216)",
            }}
            type="submit"
            className="rounded-md bg-gradient-to-l from-indigo-600/70 to-blue-800 px-4 py-2 text-blue-50 shadow shadow-gray-900 "
          >
            Submit
          </Button>
        </AnimatePresence>
      </Box>
    </form>
  );
}
