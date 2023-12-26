import { signOut } from "@/lib/auth";
import { Button } from "@mui/material";
import React from "react";
import MotionButton from "./Motion/MotionButton";

export default async function LogoutButton() {
  const Logout = async () => {
    "use server";
    await signOut({ redirect: true, redirectTo: "/" });
  };
  return (
    <form action={Logout}>
      <Button
        color="error"
        variant="contained"
        component={MotionButton}
        whileHover={{ scale: 1.1 }}
        className="px-4 py-2 hover:bg-red-700 hover:text-red-50"
      >
        Log out
      </Button>
    </form>
  );
}
