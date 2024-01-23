import { Caste, GradeType, Gender } from "@prisma/client";
import { z } from "zod";

export const allGrades = [
  "nursery",
  "jr",
  "sr",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];

export const StudentFieldValidator = z.object({
  fullname: z.string({ required_error: "We don't know what is your name" }),
  father_name: z.string({ required_error: "Who is your father?" }),
  mother_name: z.string({ required_error: "Who is your mother?" }),
  caste: z.enum(["Gen", "SC", "ST", "OBC", "NT"], {
    required_error: "Please enter your caste name",
  }),
  grade: z.enum(
    ["nursery", "jr", "sr", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
    { required_error: "Which class do you want to study?" },
  ),
  address: z.string({ required_error: "Where do you live?" }),
  contact: z
    .string({ required_error: "How will we contact you?" })
    .length(10, { message: "Contact numbers must be at least 10 digits long." }),
  email: z
    .string({ required_error: "Please enter your email address." })
    .email({ message: "It must be at email" }),
  gender: z.enum(["Male", "Female"], {
    required_error: "Are you a male... or a female?",
  }),
  isNew: z.boolean().default(true).optional(),
});

export interface StudentFields {
  fullname: string;
  father_name: string;
  mother_name: string;
  caste?: Caste;
  grade: GradeType;
  address: string;
  contact: string;
  email: string;
  gender: Gender;
  isNew?: boolean;
}
