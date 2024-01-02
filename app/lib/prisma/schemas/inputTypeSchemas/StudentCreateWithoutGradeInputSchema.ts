import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GenderSchema } from './GenderSchema';
import { UserCreateNestedOneWithoutStudentInputSchema } from './UserCreateNestedOneWithoutStudentInputSchema';

export const StudentCreateWithoutGradeInputSchema: z.ZodType<Omit<Prisma.StudentCreateWithoutGradeInput, "id">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string(),
  father_name: z.string(),
  mother_name: z.string(),
  contact: z.string(),
  caste: z.string(),
  address: z.string(),
  gender: z.lazy(() => GenderSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutStudentInputSchema)
}).strict();

export default StudentCreateWithoutGradeInputSchema;
