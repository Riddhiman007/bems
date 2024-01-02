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

  const student = await prisma.student.create({
    data: {
      address,
      caste,
      fullname,
      mother_name,
      contact,
      father_name,
      grade: {
        connect: {
          grade: grade_name,
        },
      },
      user: {
        create: {
          fullname,
          email,
          username,
          role: "Student" as Role,

          address,
        },
      },
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
