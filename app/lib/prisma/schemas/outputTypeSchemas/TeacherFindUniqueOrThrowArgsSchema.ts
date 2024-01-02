import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherIncludeSchema } from '../inputTypeSchemas/TeacherIncludeSchema'
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

export const TeacherFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeacherFindUniqueOrThrowArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereUniqueInputSchema,
}).strict() ;

export default TeacherFindUniqueOrThrowArgsSchema;
