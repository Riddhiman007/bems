import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeIncludeSchema } from '../inputTypeSchemas/GradeIncludeSchema'
import { GradeWhereInputSchema } from '../inputTypeSchemas/GradeWhereInputSchema'
import { GradeOrderByWithRelationInputSchema } from '../inputTypeSchemas/GradeOrderByWithRelationInputSchema'
import { GradeWhereUniqueInputSchema } from '../inputTypeSchemas/GradeWhereUniqueInputSchema'
import { GradeScalarFieldEnumSchema } from '../inputTypeSchemas/GradeScalarFieldEnumSchema'
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

export const GradeFindFirstArgsSchema: z.ZodType<Prisma.GradeFindFirstArgs> = z.object({
  select: GradeSelectSchema.optional(),
  include: GradeIncludeSchema.optional(),
  where: GradeWhereInputSchema.optional(),
  orderBy: z.union([ GradeOrderByWithRelationInputSchema.array(),GradeOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GradeScalarFieldEnumSchema,GradeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default GradeFindFirstArgsSchema;
