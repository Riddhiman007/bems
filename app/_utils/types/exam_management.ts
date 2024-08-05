import { ExamSubjectsList } from "@prisma/client";
import { Key } from "react";

interface IClassStudentCol {
  id: Key;
  name: string;
  /** @default "start" */
  align?: "start" | "center" | "end";
}
type ExamSubjectMarksType = Record<ExamSubjectsList, number>;
interface IClassStudentRow extends ExamSubjectMarksType {
  id: string;
  fullname: string;
  total: number;
  percentage: number;
}
export type { IClassStudentCol, IClassStudentRow, ExamSubjectMarksType };
