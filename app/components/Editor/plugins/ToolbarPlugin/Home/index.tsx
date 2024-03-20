"use client";
import { Divider, Typography } from "@mui/material";
import React from "react";
import FormatText from "./FormatText";
import StyleText from "./StyleText";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <StyleText />
      <Divider orientation="vertical" flexItem />
      <FormatText />
      <Divider orientation="vertical" flexItem />
      <Typography>other</Typography>
    </div>
  );
}
