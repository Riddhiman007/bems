import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentIncludeSchema } from '../inputTypeSchemas/StudentIncludeSchema'
import { StudentUpdateInputSchema } from '../inputTypeSchemas/StudentUpdateInputSchema'
import { StudentUncheckedUpdateInputSchema } from '../inputTypeSchemas/StudentUncheckedUpdateInputSchema'
import { StudentWhereUniqueInputSchema } from '../inputTypeSchemas/StudentWhereUniqueInputSchema'
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

export const StudentUpdateArgsSchema: z.ZodType<Omit<Prisma.StudentUpdateArgs, "data"> & { data: z.infer<typeof StudentUpdateInputSchema> | z.infer<typeof StudentUncheckedUpdateInputSchema> }> = z.object({
  select: StudentSelectSchema.optional(),
  include: StudentIncludeSchema.optional(),
  data: z.union([ StudentUpdateInputSchema,StudentUncheckedUpdateInputSchema ]),
  where: StudentWhereUniqueInputSchema,
}).strict() ;

export default StudentUpdateArgsSchema;
