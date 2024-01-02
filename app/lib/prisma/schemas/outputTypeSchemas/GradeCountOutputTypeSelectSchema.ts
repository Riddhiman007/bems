import { z } from 'zod';
import type { Prisma } from '../../client';

export const GradeCountOutputTypeSelectSchema: z.ZodType<Prisma.GradeCountOutputTypeSelect> = z.object({
  students: z.boolean().optional(),
}).strict();

export default GradeCountOutputTypeSelectSchema;
