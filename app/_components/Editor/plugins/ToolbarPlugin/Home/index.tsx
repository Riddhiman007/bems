"use client";
import React from "react";
import FormatText from "./FormatText";
import StyleText from "./StyleText";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <StyleText />
      <Divider orientation="vertical" />
      <FormatText />
      <Divider orientation="vertical" />
      <div>other</div>
    </div>
  );
}
