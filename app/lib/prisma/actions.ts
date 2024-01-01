"use server";

import { Role } from "@prisma/client";
// import { Student } from "@prisma/client";
import prisma from ".";
import { Grade } from "./helper";
import { Student } from "./schemas";

export async function createNewStudent({
  fullname,
  username,
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
          username,
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
  let student = await prisma.student.create({
    include: {
      grade: true,
      user: true,
    },
    data: {
      address,
      contact,
      caste,

      father_name,
      mother_name,
      fullname,
      gender,
      grade_name,
      email,
      username,
    },
  });
  console.log(student);
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
