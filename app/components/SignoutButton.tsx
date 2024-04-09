"use client";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { MotionButton } from "./Motion";
import { logOut } from "@/lib/actions";

export default function SignoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <form
      onSubmit={async () => {
        setIsLoading(true);
        await logOut();
        setIsLoading(false);
      }}
    >
      <Button
        isLoading={isLoading}
        color="danger"
        variant="ghost"
        as={MotionButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.15 }}
        className="bg-danger-200 px-4 py-2 text-danger-foreground hover:bg-danger-100"
      >
        Log out
      </Button>
    </form>
  );
}
