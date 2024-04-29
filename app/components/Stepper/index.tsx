import { Check } from "@mui/icons-material";
import React, { useState } from "react";

import styles from "./styles.module.css";
export interface ItemProps {
  component: React.ReactNode;
  label: string;
  [key: string]: any;
  [key: symbol]: any;
}

export interface StepperProps {
  activeStep: number;
  complete: boolean;
  items: ItemProps[];
  children: React.ReactNode;
}
export default function Stepper({ activeStep, items, complete, children }: StepperProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row">
        {items.map(({ label }, i) => (
          <div
            key={i}
            className={`${styles.stepItem} ${activeStep === i + 1 && styles.active} ${
              (i + 1 < activeStep || complete) && styles.complete
            } `}
          >
            <div className="step">
              {i + 1 < activeStep || complete ? <Check className="size-6" /> : i + 1}
            </div>
            <p className="text-gray-500">{label}</p>
          </div>
        ))}
      </div>
      {items[activeStep].component}
      {children}
    </div>
  );
}
