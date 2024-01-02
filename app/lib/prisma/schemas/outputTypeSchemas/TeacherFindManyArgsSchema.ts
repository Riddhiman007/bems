import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeacherIncludeSchema } from '../inputTypeSchemas/TeacherIncludeSchema'
import { TeacherWhereInputSchema } from '../inputTypeSchemas/TeacherWhereInputSchema'
import { TeacherOrderByWithRelationInputSchema } from '../inputTypeSchemas/TeacherOrderByWithRelationInputSchema'
import { TeacherWhereUniqueInputSchema } from '../inputTypeSchemas/TeacherWhereUniqueInputSchema'
import { TeacherScalarFieldEnumSchema } from '../inputTypeSchemas/TeacherScalarFieldEnumSchema'
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

export const TeacherFindManyArgsSchema: z.ZodType<Prisma.TeacherFindManyArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithRelationInputSchema.array(),TeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: TeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeacherScalarFieldEnumSchema,TeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TeacherFindManyArgsSchema;
