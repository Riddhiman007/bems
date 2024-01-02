import { z } from 'zod';
import type { Prisma } from '../../client';
import { GradeIncludeSchema } from '../inputTypeSchemas/GradeIncludeSchema'
import { GradeWhereUniqueInputSchema } from '../inputTypeSchemas/GradeWhereUniqueInputSchema'
import { GradeCreateInputSchema } from '../inputTypeSchemas/GradeCreateInputSchema'
import { GradeUncheckedCreateInputSchema } from '../inputTypeSchemas/GradeUncheckedCreateInputSchema'
import { GradeUpdateInputSchema } from '../inputTypeSchemas/GradeUpdateInputSchema'
import { GradeUncheckedUpdateInputSchema } from '../inputTypeSchemas/GradeUncheckedUpdateInputSchema'
import { TeacherArgsSchema } from "../outputTypeSchemas/TeacherArgsSchema"
import { StudentArgsSchema } from "../outputTypeSchemas/StudentArgsSchema"
import { GradeCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GradeSelectSchema: z.ZodType<Prisma.GradeSelect> = z.object({
  id: z.boolean().optional(),
  grade: z.boolean().optional(),
  teacher_name: z.boolean().optional(),
  class_teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GradeUpsertArgsSchema: z.ZodType<Prisma.GradeUpsertArgs> = z.object({
  select: GradeSelectSchema.optional(),
  include: GradeIncludeSchema.optional(),
  where: GradeWhereUniqueInputSchema,
  create: z.union([ GradeCreateInputSchema,GradeUncheckedCreateInputSchema ]),
  update: z.union([ GradeUpdateInputSchema,GradeUncheckedUpdateInputSchema ]),
}).strict() ;

export default GradeUpsertArgsSchema;
