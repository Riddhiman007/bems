import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentIncludeSchema } from '../inputTypeSchemas/StudentIncludeSchema'
import { StudentWhereUniqueInputSchema } from '../inputTypeSchemas/StudentWhereUniqueInputSchema'
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudentSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
  id: z.boolean().optional(),
  fullname: z.boolean().optional(),
  father_name: z.boolean().optional(),
  mother_name: z.boolean().optional(),
  contact: z.boolean().optional(),
  caste: z.boolean().optional(),
  address: z.boolean().optional(),
  isNew: z.boolean().optional(),
  gender: z.boolean().optional(),
  email: z.boolean().optional(),
  grade_name: z.boolean().optional(),
  grade: z.union([z.boolean(),z.lazy(() => GradeArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const StudentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StudentFindUniqueOrThrowArgs> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export default StudentFindUniqueOrThrowArgsSchema;
