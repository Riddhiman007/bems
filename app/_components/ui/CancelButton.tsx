// "use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { MotionButton } from "../Motion";

/// This component is used for intercepting routes only
export default function CancelButton() {
  return (
    <Button
      type="button"
      as={MotionButton}
      initial={{ opacity: 0, y: 400 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      variant="bordered"
      className="rounded-md px-4 py-2"
      color="danger"
    >
      Cancel
    </Button>
);
}
