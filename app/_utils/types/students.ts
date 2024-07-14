import { Caste, GradeType } from "@prisma/client";
import { InferInput, InferOutput, keyof } from "valibot";
import { StudentFieldValidator } from "../schema";

export const allGrades = Object.values(GradeType);
export const allCastes = Object.values(Caste);

export type StudentInput = InferInput<typeof StudentFieldValidator>;
export type StudentOutput = InferOutput<typeof StudentFieldValidator>;
export type StudentOutputWithId = StudentOutput & { id: string };
