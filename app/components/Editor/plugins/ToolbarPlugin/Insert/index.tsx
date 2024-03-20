"use client";
import { Divider } from "@mui/material";
import React from "react";
import Youtube from "./Youtube";

export default function Insert() {
  return (
    <div className="flex flex-row gap-4">
      <Youtube />
      <Divider orientation="vertical" flexItem />
    </div>
  );
}
