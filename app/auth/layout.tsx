import { Box } from "@mui/material";
import React from "react";

export default function AuthLayout({ children }) {
  return <Box className=" flex flex-row justify-center"> {children}</Box>;
}
