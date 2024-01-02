import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string(),
  fullname: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  username: z.string(),
  address: z.string(),
  teacherId: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
