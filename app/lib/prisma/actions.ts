"use server";

import { Student } from "@prisma/client";
import prisma from ".";
import { Grade } from "./helper";

export interface StudentInterface {
  firstname: string;
  middlename?: string;

  lastname: string;
  username: string;
  email: string;
  father_name: string;
  mother_name: string;
  caste: string;
  grade: Grade;
}
export async function createNewStudent({
  firstname,
  middlename,
  lastname,
  username,
  email,
  father_name,
  mother_name,
  caste,
  grade,
}: StudentInterface): Promise<Student> {
  let user = await prisma.user.create({
    data: { firstname, username, email, lastname, middlename, role: "student" },
  });
  let student = await prisma.student.create({
    data: {
      firstname,
      middlename,
      lastname,
      username,
      caste,
      father_name,
      mother_name,
      grade_name: grade,
      email: user.email,
    },
  });
  return student;
}

// export async function createOrUpdateStudent({
//   caste,
//   email,
//   father_name,
//   firstname,
//   grade,
//   lastname,
//   mother_name,
//   username,
//   middlename,
// }: StudentInterface) {
//   await prisma.student.upsert({
//     create: {
//       caste,
//       father_name,
//       firstname,
//       lastname,
//       mother_name,
//       username,
//       email,
//       grade_name: grade,
//     },
//     update: {

//     }
//   });
// }
