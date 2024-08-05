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
