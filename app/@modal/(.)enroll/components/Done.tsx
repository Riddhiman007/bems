import { Typography } from "@mui/material";
import React from "react";

export default function Done() {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Typography variant="h5" className="text-center font-bold">
        Thanks for your time.
      </Typography>
      <Typography variant="body1" className="text-center">
        We&apos;ll reply soon...
      </Typography>
    </div>
  );
}
