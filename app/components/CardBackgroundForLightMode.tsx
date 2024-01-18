"use client";
import { useDarkMode } from "@/contexts";
import React from "react";

export default function CardBackgroundForLightMode() {
  const { isDark } = useDarkMode();
  return (
    <>
      {!isDark && (
        <>
          <span className="animate-pink-background-slide absolute m-auto ml-20 mt-7 h-32 w-32 rounded-full bg-pink-600/20 mix-blend-multiply blur-lg"></span>
          <span className="animate-blue-background-slide absolute ml-40 mt-7 h-32 w-32 rounded-full bg-blue-600/20 mix-blend-multiply blur-lg"></span>
          <span className="animate-yellow-background-slide absolute ml-20 mt-16 h-32 w-32 rounded-full bg-yellow-400/20 mix-blend-multiply blur-lg"></span>
        </>
      )}
    </>
  );
}
