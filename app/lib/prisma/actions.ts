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
  email: string,
  {
    address,
    caste,
    contact,
    email: newEmail,
    father_name,
    fullname,
    gender,
    grade_name,
    isNew,
    mother_name,
  }: PrismaStudentModel,
): Promise<Student> {
  const student = await prisma.student.update({
    data: {
      address,
      caste,
      contact,
      email: newEmail,
      father_name,
      fullname,
      mother_name,
      isNew,

      gender,
      grade_name,
    },
    where: { email },
  });

  const t = await prisma.user.update({
    where: { email },
    data: { address, email: newEmail, fullname },
  });
  revalidatePath("/admin");
  return student;
}

export async function deleteStudent(email: string) {
  let d = await prisma.student.delete({
    where: { email },
  });
  let e = await prisma.user.delete({ where: { email } });
  revalidatePath("/admin");
  return d;
}
