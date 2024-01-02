import { z } from 'zod';
import type { Prisma } from '../../client';
import { StudentIncludeSchema } from '../inputTypeSchemas/StudentIncludeSchema'
import { StudentWhereInputSchema } from '../inputTypeSchemas/StudentWhereInputSchema'
import { StudentOrderByWithRelationInputSchema } from '../inputTypeSchemas/StudentOrderByWithRelationInputSchema'
import { StudentWhereUniqueInputSchema } from '../inputTypeSchemas/StudentWhereUniqueInputSchema'
import { StudentScalarFieldEnumSchema } from '../inputTypeSchemas/StudentScalarFieldEnumSchema'
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudentSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
  id: z.boolean().optional(),
  fullname: z.boolean().optional(),
  username: z.boolean().optional(),
  father_name: z.boolean().optional(),
  mother_name: z.boolean().optional(),
  contact: z.boolean().optional(),
  caste: z.boolean().optional(),
  address: z.boolean().optional(),
  gender: z.boolean().optional(),
  email: z.boolean().optional(),
  grade_name: z.boolean().optional(),
  userId: z.boolean().optional(),
  grade: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const StudentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StudentFindFirstOrThrowArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudentScalarFieldEnumSchema,StudentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default StudentFindFirstOrThrowArgsSchema;
