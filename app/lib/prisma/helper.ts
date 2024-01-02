import { z } from "zod";
import { StudentCreateInputSchema } from "./schemas";
export type Grade =
  | "nursery"
  | "jr. kg"
  | "sr. kg"
  | "I"
  | "II"
  | "III"
  | "IV"
  | "V"
  | "VI"
  | "VII"
  | "VIII"
  | "IX"
  | "X";

export const allGrades = [
  "nursery",
  "jr",
  "sr",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];
