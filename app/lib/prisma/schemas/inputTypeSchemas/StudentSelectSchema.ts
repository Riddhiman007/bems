import { z } from 'zod';
import type { Prisma } from '../../client';
import { GradeArgsSchema } from "../outputTypeSchemas/GradeArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

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

export default StudentSelectSchema;
