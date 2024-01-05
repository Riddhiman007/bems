import { z } from "zod";
import { CasteSchema } from "../inputTypeSchemas/CasteSchema";
import { GenderSchema } from "../inputTypeSchemas/GenderSchema";
import { GradeTypeSchema } from "../inputTypeSchemas/GradeTypeSchema";

/////////////////////////////////////////
// STUDENT SCHEMA
/////////////////////////////////////////

export const StudentSchema = z.object({
  caste: CasteSchema,
  gender: GenderSchema,
  grade_name: GradeTypeSchema,
  // omitted: id: z.string(),
  fullname: z.string({ required_error: "We don't know what is your name" }),
  father_name: z.string({ required_error: "Who is your father?" }),
  mother_name: z.string({ required_error: "Who is your mother?" }),
  contact: z
    .string({ required_error: "Please enter your contact number." })
    .length(10, { message: "Contacts must be 10 digits long" }),
  address: z.string({ required_error: "Can you please tell us where do you live?" }),
  // omitted: isNew: z.boolean(),
  email: z.string({ required_error: "Can you please enter your email address?" }),
});

export type Student = z.infer<typeof StudentSchema>;

export default StudentSchema;
