import { ExamSubjectsList, ExamType } from "@prisma/client";

export const ExamTypeList = Object.values(ExamType);

export type DefaultExamMarks = {
  exam_type: ExamType;
  primary_main_sub_marks?: number;
  primary_optional_sub_marks?: number;
  middle_main_sub_marks?: number;
  middle_optional_sub_marks?: number;
  secondary_main_sub_marks?: number;
  secondary_optional_sub_marks?: number;
  pre_primary_sub_marks?: number;
};

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

export const MainSubject: ExamSubjectsList[] = [
  "English",
  "Hindi",
  "Marathi",
  "Mathematics",
  "SST",
  "Science",
];

export const allExamSubjects = Object.values(ExamSubjectsList);
