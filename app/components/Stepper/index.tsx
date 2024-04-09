import { Check } from "@mui/icons-material";
import React, { useState } from "react";

import styles from "./styles.module.css";
interface ItemProps {
  content: React.ReactNode;
  title: string;
  [key: string]: any;
  [key: symbol]: any;
}

export interface StepperProps {
  activeStep: number;
  complete: boolean;
  items: ItemProps[];
}
export default function Stepper({ activeStep, items, complete }: StepperProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        {items.map(({ title }, i) => (
          <div
            key={i}
            className={`${styles.stepItem} ${activeStep === i + 1 && styles.active} ${
              (i + 1 < activeStep || complete) && styles.complete
            } `}
          >
            <div className="step">
              {i + 1 < activeStep || complete ? <Check className="size-6" /> : i + 1}
            </div>
            <p className="text-gray-500">{title}</p>
          </div>
        ))}
      </div>
      {items[activeStep].content}
    </div>
  );
}
