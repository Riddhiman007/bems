import { DefaultExamMarks } from "@/_utils/types";
import { ExamSubjectsList, GradeType, PrismaClient } from "@prisma/client";

const prismaClientSingleton: () => PrismaClient = () => new PrismaClient();

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();
export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export * from "./actions";
// export * from "./helpers";

export const MainSubjects: ExamSubjectsList[] = [
  "English",
  "Hindi",
  "Marathi",
  "Mathematics",
  "SST",
  "Science",
];

export const allGrades = Object.values(GradeType);

export const exam_defaults: DefaultExamMarks[] = [
  {
    exam_type: "FA1",
    middle_main_sub_marks: 40,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 20,
    primary_optional_sub_marks: 20,
    secondary_main_sub_marks: 60,
    secondary_optional_sub_marks: 25,
    pre_primary_sub_marks: 20,
  },
  {
    exam_type: "SA1",
    middle_main_sub_marks: 60,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 30,
    primary_optional_sub_marks: 30,
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 25,
    pre_primary_sub_marks: 30,
  },
  {
    exam_type: "FA2",
    middle_main_sub_marks: 40,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 30,
    primary_optional_sub_marks: 30,
    pre_primary_sub_marks: 20,
  },
  {
    exam_type: "SA2",
    middle_main_sub_marks: 60,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 40,
    primary_optional_sub_marks: 40,
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 50,
    pre_primary_sub_marks: 20,
  },
  {
    exam_type: "Prelim1",
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 25,
  },
  {
    exam_type: "Prelim2",
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 25,
  },
];

export const prepGrades: GradeType[] = ["nursery", "jr", "sr"];
export const primaryGrades: GradeType[] = ["I", "II", "III", "IV"];
export const middleGrades: GradeType[] = ["V", "VI", "VII"];
export const secondaryGrades: GradeType[] = ["VIII", "IX", "X"];
