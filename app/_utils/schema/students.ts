import { Caste, Gender, GradeType } from "@prisma/client";
import * as v from "valibot";

export const StudentFieldValidator = v.object({
  fullname: v.string("Please enter your name"),
  father_name: v.string("Please enter your father name"),
  mother_name: v.string("Please enter your mother name"),
  caste: v.enum(Caste, "Please enter your caste"),
  grade: v.enum(GradeType, "Please enter your grade."),
  address: v.string("Please enter your address"),
  contact: v.pipe(
    v.string("Please enter your contact."),
    v.length(10, "Contact must be at least 10 digits"),
  ),
  email: v.pipe(
    v.string("Please enter your email address."),
    v.email("It must be email address."),
  ),
  gender: v.enum(Gender, "Please select your gender."),
  isNew: v.optional(v.boolean(), true),
});
