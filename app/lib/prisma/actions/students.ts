"use server";

import { Role } from "@prisma/client";
import { Student as PrismaStudentModel } from "@prisma/client";
import prisma, { StudentFields } from "..";
import { revalidatePath } from "next/cache";
import { StudentRowModel } from "@/admin/components";

export async function createNewStudent({
  fullname,
  email,
  father_name,
  mother_name,
  address,
  contact,
  gender,
  caste,
  grade,
}: StudentFields): Promise<StudentRowModel> {
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
          grade,
        },
        null,
        2,
      ),
  );

  const student = await prisma.student.create({
    data: {
      caste,
      fullname,
      mother_name,
      father_name,
      isNew: true,
      grade: {
        connect: {
          grade: grade,
        },
      },
      user: {
        create: {
          fullname,
          email,
          contact,

          role: "Student" as Role,

          address,
        },
      },
    },
    include: { user: true },
  });
  console.log(student);
  revalidatePath("/admin");
  return {
    address: student.user.address,
    contact: student.user.contact,
    email: student.user.email,
    father_name: student.father_name,
    fullname: student.fullname,
    gender: student.user.gender,
    grade: student.grade_name,
    id: student.id,
    mother_name: student.mother_name,
    caste: student.caste,
    isNew: student.isNew,
  };
}

export async function fetchAllStudents(): Promise<StudentRowModel[]> {
  const student = await prisma.student.findMany({ include: { user: true, grade: true } });
  return student.map<StudentRowModel>((v) => ({
    address: v.user.address,
    contact: v.user.contact,
    email: v.user.email,
    father_name: v.father_name,
    mother_name: v.mother_name,
    fullname: v.fullname,
    gender: v.user.gender,
    grade: v.grade.grade,
    id: v.id,
    caste: v.caste,
    isNew: v.isNew,
  }));
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
    grade,
    isNew,
    mother_name,
  }: StudentFields,
): Promise<StudentFields | null | undefined> {
  const student = await prisma.user.update({
    data: {
      fullname,
      address,
      email: newEmail,
      gender,
      contact,
      student: {
        update: {
          data: {
            caste,
            father_name,
            fullname,
            mother_name,
            isNew,
            grade: {
              connect: { grade },
            },
          },
        },
      },
    },
    where: { email },
    // include: { student: { select: { caste, } } },
    include: {
      student: { include: { grade: { select: { grade: true } } } },
    },
  });

  // const t = await prisma.user.update({
  //   where: { email },
  //   data: { address, email: newEmail, fullname },
  // });
  revalidatePath("/admin");
  return {
    father_name: student.student?.father_name,
    mother_name: student.student?.mother_name,
    gender: student.gender,
    grade: student.student?.grade.grade,
    isNew: student.student?.isNew,
    address: student.address,
    email: student.email,
    contact: student.contact,
    fullname: student.fullname,
    caste: student.student?.caste,
  };
}

export async function deleteStudent(email: string) {
  // let d = await prisma.student.delete({
  //   where: { user: { email } },
  //   include: { user: true },
  // });
  let e = await prisma.user.delete({ where: { email }, include: { student: true } });
  revalidatePath("/admin");
  return e.student;
}
