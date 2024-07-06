"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { MotionButton } from "../Motion";
import { useRouter } from "next/navigation";

interface Props {
  isSubmitting: boolean;
  onClose: () => void;
}

/// This component is used for intercepting routes only
export default function CancelButton({ isSubmitting, onClose }: Props) {
  const router = useRouter();
  return (
    <Button
      as={MotionButton}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.15 }}
      color="danger"
      variant="bordered"
      onPress={() => {
        onClose();
        setTimeout(router.back, 500);
      }}
      type="button"
      isDisabled={isSubmitting}
    >
      Cancel
    </Button>
  );
}
