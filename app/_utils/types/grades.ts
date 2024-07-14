import { GradeType } from "@prisma/client";

export type GradeClass = "prep" | "primary" | "middle" | "secondary";
export const prepGrades: GradeType[] = ["nursery", "jr", "sr"];
export const primaryGrades: GradeType[] = ["I", "II", "III", "IV"];
export const middleGrades: GradeType[] = ["V", "VI", "VII"];
export const secondaryGrades: GradeType[] = ["VIII", "IX", "X"];
