import { z } from 'zod';
import { GradeTypeSchema } from '../inputTypeSchemas/GradeTypeSchema'

/////////////////////////////////////////
// GRADE SCHEMA
/////////////////////////////////////////

export const GradeSchema = z.object({
  grade: GradeTypeSchema,
  id: z.string(),
  teacher_name: z.string(),
})

export type Grade = z.infer<typeof GradeSchema>

export default GradeSchema;
