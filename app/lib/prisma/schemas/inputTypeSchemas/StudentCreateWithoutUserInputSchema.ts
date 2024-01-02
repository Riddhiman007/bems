import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GenderSchema } from './GenderSchema';
import { GradeCreateNestedOneWithoutStudentsInputSchema } from './GradeCreateNestedOneWithoutStudentsInputSchema';

export const StudentCreateWithoutUserInputSchema: z.ZodType<Omit<Prisma.StudentCreateWithoutUserInput, "id">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  contact: z.string(),
  caste: z.string(),
  address: z.string(),
  gender: z.lazy(() => GenderSchema).optional(),
  grade: z.lazy(() => GradeCreateNestedOneWithoutStudentsInputSchema)
}).strict();

export default StudentCreateWithoutUserInputSchema;
