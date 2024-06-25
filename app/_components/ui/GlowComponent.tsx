"use client";

import { useMotionValue, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import { MotionDiv } from "../Motion";

interface Props {
  children: React.ReactNode;
  glowColor?: string;
  radius?: number;
}
export interface GlowProps {
  glowRadius?: number;
  glowColor?: string;
  disableGlow?: boolean;
}

export interface UseGlowProps {
  defaultGlow?: boolean;
  radius?: number;
  glowColor?: string;
}
export function useGlow({ radius, glowColor, defaultGlow }: UseGlowProps) {
  const [visible, setVisible] = useState(defaultGlow);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return {
    visible,
    setVisible,
    handleMouseMove,
    background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius || 100 + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
         ${glowColor || "var(--blue-600)"},
          transparent 80%
        )
      `,
  };
}

export function GlowComponent({ children, ...props }: Props) {
  const { background, handleMouseMove, setVisible } = useGlow({
    ...props,
  });
  return (
    <MotionDiv
      style={{
        background,
      }}
      className="group rounded-medium p-[2px] transition duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      role="button"
    >
      {children}
    </MotionDiv>
  );
}
