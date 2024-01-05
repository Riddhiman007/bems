import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'
import { GenderSchema } from '../inputTypeSchemas/GenderSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  gender: GenderSchema,
  id: z.string(),
  fullname: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  address: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
