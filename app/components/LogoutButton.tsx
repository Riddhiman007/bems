import { signOut } from "@/lib/auth";
import { Button } from "@mui/material";
import React from "react";

export default async function LogoutButton() {
  const Logout = async () => {
    "use server";
    await signOut({ redirect: true, redirectTo: "/" });
  };
  return (
    <form action={Logout}>
      <Button color="error" variant="outlined" className="px-4 py-2 hover:bg-red-700">
        Log out
      </Button>
    </form>
  );
}
