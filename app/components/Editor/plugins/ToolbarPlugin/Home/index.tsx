"use client";
import { Box, Divider } from "@mui/material";
import React from "react";
import FormatText from "./FormatText";
import StyleText from "./StyleText";

export default function Home() {
  return (
    <Box className="flex flex-row gap-4">
      <StyleText />
      <Divider orientation="vertical" flexItem />
      <FormatText />
      <Divider orientation="vertical" flexItem />
      other features
    </Box>
  );
}
