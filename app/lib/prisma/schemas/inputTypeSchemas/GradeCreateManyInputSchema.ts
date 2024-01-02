import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';

export const GradeCreateManyInputSchema: z.ZodType<Prisma.GradeCreateManyInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  teacher_name: z.string()
}).strict();

export default GradeCreateManyInputSchema;
