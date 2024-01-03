import { z } from 'zod';
import { GenderSchema } from '../inputTypeSchemas/GenderSchema'
import { GradeTypeSchema } from '../inputTypeSchemas/GradeTypeSchema'

/////////////////////////////////////////
// STUDENT SCHEMA
/////////////////////////////////////////

export const StudentSchema = z.object({
  gender: GenderSchema,
  grade_name: GradeTypeSchema,
  // omitted: id: z.string(),
  fullname: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  contact: z.string(),
  caste: z.string(),
  address: z.string(),
  // omitted: isNew: z.boolean(),
  email: z.string(),
})

export type Student = z.infer<typeof StudentSchema>

export default StudentSchema;
