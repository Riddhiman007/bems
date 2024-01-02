import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIncludeSchema } from '../inputTypeSchemas/UserIncludeSchema'
import { UserWhereUniqueInputSchema } from '../inputTypeSchemas/UserWhereUniqueInputSchema'
import { StudentArgsSchema } from "../outputTypeSchemas/StudentArgsSchema"
import { TeacherArgsSchema } from "../outputTypeSchemas/TeacherArgsSchema"
import { PostArgsSchema } from "../outputTypeSchemas/PostArgsSchema"
import { AccountArgsSchema } from "../outputTypeSchemas/AccountArgsSchema"
import { SessionArgsSchema } from "../outputTypeSchemas/SessionArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  fullname: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  role: z.boolean().optional(),
  image: z.boolean().optional(),
  username: z.boolean().optional(),
  address: z.boolean().optional(),
  teacherId: z.boolean().optional(),
  student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
  teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
  posts: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export default UserDeleteArgsSchema;
