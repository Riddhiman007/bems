import type { Prisma } from '../../client';

import { z } from 'zod';
import { GenderSchema } from './GenderSchema';
import { GradeTypeSchema } from './GradeTypeSchema';

export const StudentUncheckedCreateWithoutUserInputSchema: z.ZodType<Omit<Prisma.StudentUncheckedCreateWithoutUserInput, "id">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  contact: z.string(),
  caste: z.string(),
  address: z.string(),
  gender: z.lazy(() => GenderSchema).optional(),
  grade_name: z.lazy(() => GradeTypeSchema)
}).strict();

export default StudentUncheckedCreateWithoutUserInputSchema;
