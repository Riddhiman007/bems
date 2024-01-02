import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const TeacherSelectSchema: z.ZodType<Prisma.TeacherSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  userId: z.boolean().optional(),
  class: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default TeacherSelectSchema;
