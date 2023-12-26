"use client";
import Button from "@mui/material/Button";
import React from "react";
import MotionButton from "./Motion/MotionButton";
import { useRouter } from "next/navigation";

/// This component is used for intercepting routes only
export default function CancelButton() {
  const router = useRouter();
  return (
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
  );
}
