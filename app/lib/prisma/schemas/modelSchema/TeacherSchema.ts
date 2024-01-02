import { z } from 'zod';

/////////////////////////////////////////
// TEACHER SCHEMA
/////////////////////////////////////////

export const TeacherSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  userId: z.string(),
})

export type Teacher = z.infer<typeof TeacherSchema>

export default TeacherSchema;
