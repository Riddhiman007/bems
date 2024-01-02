import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';

export const GradeUncheckedCreateWithoutStudentsInputSchema: z.ZodType<Prisma.GradeUncheckedCreateWithoutStudentsInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  teacher_name: z.string()
}).strict();

export default GradeUncheckedCreateWithoutStudentsInputSchema;
