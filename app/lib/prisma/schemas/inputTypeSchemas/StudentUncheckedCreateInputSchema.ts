import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GenderSchema } from './GenderSchema';
import { GradeTypeSchema } from './GradeTypeSchema';

export const StudentUncheckedCreateInputSchema: z.ZodType<Omit<Prisma.StudentUncheckedCreateInput, "id" | "isNew">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  contact: z.string(),
  caste: z.string(),
  address: z.string(),
  // omitted: isNew: z.boolean(),
  gender: z.lazy(() => GenderSchema).optional(),
  email: z.string(),
  grade_name: z.lazy(() => GradeTypeSchema)
}).strict();

export default StudentUncheckedCreateInputSchema;
