import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CasteSchema } from './CasteSchema';
import { GenderSchema } from './GenderSchema';
import { GradeTypeSchema } from './GradeTypeSchema';

export const StudentUncheckedCreateWithoutUserInputSchema: z.ZodType<Omit<Prisma.StudentUncheckedCreateWithoutUserInput, "id" | "isNew">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string({required_error:"We don't know what is your name"}),
  father_name: z.string({required_error:"Who is your father?"}),
  mother_name: z.string({required_error:"Who is your mother?"}),
  contact: z.string(),
  caste: z.lazy(() => CasteSchema).optional(),
  address: z.string({required_error:"Can you please tell us where do you live?"}),
  // omitted: isNew: z.boolean(),
  gender: z.lazy(() => GenderSchema).optional(),
  grade_name: z.lazy(() => GradeTypeSchema)
}).strict();

export default StudentUncheckedCreateWithoutUserInputSchema;
