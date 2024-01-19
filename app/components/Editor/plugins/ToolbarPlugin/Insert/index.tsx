"use client";
import { Box, Divider } from "@mui/material";
import React from "react";
import Youtube from "./Youtube";

export default function Insert() {
  return (
    <Box className="flex flex-col gap-4">
      <Youtube />
      <Divider orientation="vertical" flexItem />
    </Box>
  );
}
