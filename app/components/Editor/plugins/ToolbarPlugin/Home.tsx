"use client";
import { Box, Divider } from "@mui/material";
import React from "react";
import FormatText from "./FormatText";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <Box className="flex flex-row gap-4">
      styles
      <Divider orientation="vertical" flexItem />
      <FormatText />
      <Divider orientation="vertical" flexItem />
      other features
    </Box>
  );
}
