import { AnimatePresence, MotionDiv } from "@/components/Motion";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <MotionDiv
        initial={{ opacity: 0, x: 0, y: 800 }}
        animate={{ opacity: 1, dur: 0.5, scale: 1, x: 0, y: 0 }}
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}
