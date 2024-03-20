"use server";
import { ExamSubjectsList, ExamType, GradeType } from "@prisma/client";
import prisma, { MainSubjects } from "..";

export async function createNewExamRecordForGrade(
  examType: ExamType,
  studentIds: string[],
) {
  let records = await prisma.examRecord.createMany({
    data: studentIds.map((studentId) => ({ examType, studentId })),
  });
  return records;
}

export async function fetchExamRecordWithParticularSubject(
  studentId: string,
  subject: ExamSubjectsList,
  examType: ExamType,
) {
  let record = await prisma.examRecord.findFirst({
    where: { studentId, examType },
    select: {
      name: { select: { fullname: true } },
      Computer: subject === "Computer",
      English: subject === "English",
      Hindi: subject === "Hindi",
      Marathi: subject === "Marathi",
      Mathematics: subject === "Mathematics",
      Science: subject === "Science",
      SST: subject === "SST",
    },
  });
  return record;
}

export async function fetchExamRecordsOfParticularGrade(
  examType: ExamType,
  grade: GradeType,
) {
  let records = await prisma.examRecord.findMany({
    where: { name: { grade_name: grade }, examType },
    include: { name: { select: { fullname: true, id: true } } },
  });
  return records;
}

interface SubjectMarks {
  English?: number;
  Hindi?: number;
  Marathi?: number;
  SST?: number;
  Science?: number;
  Mathematics?: number;
  Computer?: number;
}

export async function updateRecord(
  examType: ExamType,
  studentId: string,
  { Computer, English, Hindi, Marathi, Mathematics, SST, Science }: SubjectMarks,
) {
  let record = await prisma.examRecord.update({
    where: { studentId_examType: { studentId, examType } },
    data: {
      Computer,
      English,
      Hindi,
      Marathi,
      Mathematics,
      SST,
      Science,
    },
  });

  if (
    record.Computer !== 0 &&
    record.English !== 0 &&
    record.Marathi !== 0 &&
    record.Mathematics !== 0 &&
    record.Science !== 0 &&
    record.SST !== 0
  ) {
    record = await prisma.examRecord.update({
      where: { studentId_examType: { studentId, examType } },
      data: { isComplete: true },
    });
  }
  if (record.isComplete) {
    let tot_marks_record = await prisma.gradeExamRel.findFirst({
      where: { exam_type: { type: examType } },
    });

    if (tot_marks_record) {
      let tot_marks = MainSubjects.length * tot_marks_record?.MainSubjectMarks;
      let got_marks =
        record.Hindi +
        record.Marathi +
        record.English +
        record.Mathematics +
        record.SST +
        record.Science;
      let percentage = (got_marks / tot_marks) * 100;
      record = await prisma.examRecord.update({
        where: { studentId_examType: { examType, studentId } },
        data: { totalMarks: got_marks, percentage },
      });
    }
  }

  return record;
}
