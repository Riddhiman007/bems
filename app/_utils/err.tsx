import { MotionLink } from "@/_components/Motion";
import { Button } from "@mui/material";
import React from "react";

interface ErrMesage {
  title: string;
  message: string;
  sol?: React.ReactNode;
}
export interface ErrProps {
  [code: string]: ErrMesage;
}
export const err_type: { [key: string]: ErrMesage } = {
  unauthenticated: {
    title: "Unauthenticated",
    message: "Sorry, you are not logged in. Please try again",
    sol: (
      <div className="flex flex-row justify-end">
        <Button
          component={MotionLink}
          href="/auth/login"
          color="success"
          whileHover={{ scale: 1.05 }}
          className="bg-green-700 px-4 py-2 text-green-50 hover:bg-green-800 active:bg-green-900"
        >
          Log in
        </Button>
      </div>
    ),
  },
  s: {
    title: "",
    message: "",
  },
};
