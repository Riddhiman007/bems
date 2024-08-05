import { ExamSubjectMarksType } from "@/_utils/types";
import { ExamSubjectsList } from "@prisma/client";

function calculateTotalMarksPerSubject(
  oralExamMarks: ExamSubjectMarksType,
  writtenExamMarks: ExamSubjectMarksType,
): ExamSubjectMarksType {
  let exam_subjects = Object.keys(ExamSubjectsList) as ExamSubjectsList[];
  return Object.fromEntries(
    exam_subjects.map((sub) => [oralExamMarks[sub] + writtenExamMarks[sub]]),
  );
}

function calculateTotalMarks(totalMarksPerSubject: ExamSubjectMarksType): number {
  let total_marks = 0;
  Object.values(totalMarksPerSubject).forEach((sub) => {
    total_marks += sub;
  });
  return total_marks;
}

export { calculateTotalMarks, calculateTotalMarksPerSubject };
