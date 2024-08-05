"use server";
import prisma from "@/_lib/prisma";
import { IClassStudentRow } from "@/_utils/types";
import { ExamType, Grade, GradeType } from "@prisma/client";
import { calculateTotalMarks, calculateTotalMarksPerSubject } from "./utils";
export async function fetchClassExamRecords(
  grade: GradeType,
  examType: ExamType,
  teacher_id: string,
): Promise<{ totalMarks: IClassStudentRow }[]> {
  const exam_records = await prisma.examRecord.findMany({
    where: {
      examType,
      AND: {
        Exam: {
          GradeExamRel: {
            every: {
              gradeId: grade,
              AND: { grade: { class_teacher: { id: teacher_id } } },
            },
          },
        },
      },
    },
    include: { oralExamRecord: true, writtenExamRecord: true, name: true },
  });

  return exam_records.map((record) => {
    let total_marks_per_subject = calculateTotalMarksPerSubject(
      record.oralExamRecord,
      record.writtenExamRecord,
    );
    return {
      totalMarks: {
        id: record.studentId,
        ...total_marks_per_subject,
        fullname: record.name.fullname,
        total: calculateTotalMarks(total_marks_per_subject),
        percentage: 0,
      },
    };
  });
}
