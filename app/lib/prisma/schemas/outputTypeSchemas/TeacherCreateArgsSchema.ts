import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeacherIncludeSchema } from '../inputTypeSchemas/TeacherIncludeSchema'
import { TeacherCreateInputSchema } from '../inputTypeSchemas/TeacherCreateInputSchema'
import { TeacherUncheckedCreateInputSchema } from '../inputTypeSchemas/TeacherUncheckedCreateInputSchema'
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeacherSelectSchema: z.ZodType<Prisma.TeacherSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  class: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TeacherCreateArgsSchema: z.ZodType<Prisma.TeacherCreateArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  data: z.union([ TeacherCreateInputSchema,TeacherUncheckedCreateInputSchema ]),
}).strict() ;

export default TeacherCreateArgsSchema;
