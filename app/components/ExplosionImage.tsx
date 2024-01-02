"use client";
import Image from "next/image";
import React from "react";

import Explosion from "@/explosion.png";
import { useTheme } from "next-themes";
import {IsMobileContext} from "@/contexts/IsMobileContext"

export default function ExplosionImage() {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" && (
        <Image
          className="absolute inset-y-0 right-10 z-10 m-auto self-center opacity-60 mix-blend-color-dodge"
          src={Explosion}
          alt="explosion"
          width={700}
          height={400}
        />
      )}
    </>
  );
}
