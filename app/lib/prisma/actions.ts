"use server";

import { Role } from "@prisma/client";
import { Student as PrismaStudentModel } from "@prisma/client";
import prisma from ".";
import { Student } from "./schemas";
import { revalidatePath } from "next/cache";

export async function createNewStudent({
  fullname,
  email,
  father_name,
  mother_name,
  address,
  contact,
  gender,
  caste,
  grade_name,
}: Student): Promise<Student> {
  console.log(
    "before push " +
      JSON.stringify(
        {
          fullname,
          email,
          father_name,
          mother_name,
          address,
          contact,
          gender,
          caste,
          grade_name,
        },
        null,
        2,
      ),
  );

  const student = await prisma.student.create({
    data: {
      address,
      caste,
      fullname,
      mother_name,
      contact,
      father_name,
      isNew: true,
      grade: {
        connect: {
          grade: grade_name,
        },
      },
      user: {
        create: {
          fullname,
          email,

          role: "Student" as Role,

          address,
        },
      },
    },
  });
  console.log(student);
  revalidatePath("/admin");
  return student;
}

export async function fetchAllStudents(): Promise<PrismaStudentModel[]> {
  return await prisma.student.findMany();
}

export async function updateStudent(
  oldRow: PrismaStudentModel,
  newRow: PrismaStudentModel,
): Promise<Student> {
  const { id, ...t } = newRow;
  const student = await prisma.student.update({
    data: { ...t },
    where: oldRow,
  });
  revalidatePath("/admin");
  return student;
}

export async function deleteStudent(student: Student) {
  let d = await prisma.student.delete({ where: student });
  revalidatePath("/admin");
  return d;
}
