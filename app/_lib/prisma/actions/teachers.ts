"use server";

import prisma from "@/_lib/prisma";
import { $Enums } from "@prisma/client";

export async function getSubjectsAndGrades(teacherId: string) {
  let res = await prisma.subjectTaughtByInWhichGrade.findMany({
    where: { subjectTeacher: { User: { id: teacherId } } },
    select: { subjects: true, grade: { select: { grade: true } } },
  });
  return res;
}
// console.log(subjects);

// return subjects;

export async function getTeacher(userId: string, role: $Enums.Role) {
  if (role === "Teacher") {
    const res = await prisma.teacher.findFirst({
      where: { User: { id: userId } },
      include: { class: true },
    });
    return res;
  }
}

export async function getExamSubjectsAndGrades(teacherId: string) {
  let res = await prisma.subjectTaughtByInWhichGrade.findMany({
    where: { subjectTeacher: { User: { id: teacherId } } },
    select: { exam_Subjects: true, grade: { select: { grade: true } } },
  });
  return res;
}
