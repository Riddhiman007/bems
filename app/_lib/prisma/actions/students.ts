"use server";

import { $Enums, Role } from "@prisma/client";
import prisma, { StudentFields } from "..";
import { revalidatePath } from "next/cache";
// import { studentLogger } from "@/logger";
import { StudentRowType } from "@/admin/@students/components";
// import { studentIndex } from "@/_lib/search";

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
}: StudentFields) {
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
  // studentIndex.addDocuments([student], { primaryKey: "id" });
  // studentLogger.info({ type: "create", student: student });

  revalidatePath("/admin", "page");
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

export async function fetchAllStudents(): Promise<StudentRowType[]> {
  const student = await prisma.student.findMany({ include: { user: true, grade: true } });
  return student.map<StudentRowType>((v) => ({
    address: v.user.address,
    contact: v.user.contact,
    email: v.user.email,
    father_name: v.father_name,
    mother_name: v.mother_name,
    fullname: v.fullname,
    gender: v.user.gender,
    grade: v.grade.grade,
    key: v.id,
    caste: v.caste,
    isNew: v.isNew,
  }));
}

export async function fetchStudentByEmail(email: string) {
  let stud = await prisma.user.findUnique({ where: { email, role: "Student" } });
  return stud;
}
export async function fetchStudentNameOfParticularGrade(grade: $Enums.GradeType) {
  const students = await prisma.student.findMany({
    where: { grade_name: grade },
    select: { id: true, fullname: true },
  });
  return students;
}
export async function updateStudent(
  id: string,
  {
    address,
    caste,
    contact,
    email,
    father_name,
    fullname,
    gender,
    grade,
    isNew,
    mother_name,
  }: Partial<StudentFields>,
) {
  const student = await prisma.student.update({
    where: { id },
    data: {
      caste,
      father_name,
      fullname,
      grade: { connect: { grade } },
      isNew,
      mother_name,
      user: { update: { address, contact, email, gender, fullname } },
    },
  });

  if (student === null || !student) {
    return null;
  }
  // studentIndex.updateDocuments([student], { primaryKey: "id" });
  // studentLogger.info({
  //   type: "edit",
  //   studentToBeEditedEmail: email,
  //   newStudentInfo: student,
  // });
  revalidatePath("/admin");
}

export async function deleteStudent(email: string) {
  await prisma.examRecord.deleteMany({ where: { name: { user: { email } } } });
  let e = await prisma.user.delete({
    where: { email },
    include: {
      student: true,
      Comment: true,
      accounts: true,
      StarredPost: true,
      posts: true,
      sessions: true,
    },
  });
  // studentIndex.deleteDocument(e.student?.id as string);
  // studentLogger.info({ type: "delete", studentInfo: e });
  revalidatePath("/admin");
  return e.student;
}
