import { ExamType, GradeType } from "@prisma/client";

export { default as CreateExam } from "./CreateExam";
export interface FormInput {
  exam: ExamType;
  fromGrade: GradeType;
  toGrade: GradeType;
}
