import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeacherIncludeSchema } from '../inputTypeSchemas/TeacherIncludeSchema'
import { TeacherUpdateInputSchema } from '../inputTypeSchemas/TeacherUpdateInputSchema'
import { TeacherUncheckedUpdateInputSchema } from '../inputTypeSchemas/TeacherUncheckedUpdateInputSchema'
import { TeacherWhereUniqueInputSchema } from '../inputTypeSchemas/TeacherWhereUniqueInputSchema'
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeacherSelectSchema: z.ZodType<Prisma.TeacherSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  username: z.boolean().optional(),
  email: z.boolean().optional(),
  userId: z.boolean().optional(),
  class: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TeacherUpdateArgsSchema: z.ZodType<Prisma.TeacherUpdateArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  data: z.union([ TeacherUpdateInputSchema,TeacherUncheckedUpdateInputSchema ]),
  where: TeacherWhereUniqueInputSchema,
}).strict() ;

export default TeacherUpdateArgsSchema;
