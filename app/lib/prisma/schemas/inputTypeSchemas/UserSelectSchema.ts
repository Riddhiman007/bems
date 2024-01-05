import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentArgsSchema } from "../outputTypeSchemas/StudentArgsSchema"
import { TeacherArgsSchema } from "../outputTypeSchemas/TeacherArgsSchema"
import { PostArgsSchema } from "../outputTypeSchemas/PostArgsSchema"
import { AccountArgsSchema } from "../outputTypeSchemas/AccountArgsSchema"
import { SessionArgsSchema } from "../outputTypeSchemas/SessionArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  fullname: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  role: z.boolean().optional(),
  image: z.boolean().optional(),
  address: z.boolean().optional(),
  gender: z.boolean().optional(),
  student: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
  teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
  posts: z.union([z.boolean(),z.lazy(() => PostArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
