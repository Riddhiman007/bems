"use client";
import React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import { useRouter } from "next/navigation";

const Button = (props: ButtonProps) => {
  const router = useRouter();
  return (
    <>
      <MuiButton type="button" onClick={() => router.back()} {...props} />
    </>
  );
};

export default Button;
