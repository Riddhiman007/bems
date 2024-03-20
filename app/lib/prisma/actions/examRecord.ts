"use server";
import { ExamSubjectsList, ExamType, GradeType } from "@prisma/client";
import prisma from "..";

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
