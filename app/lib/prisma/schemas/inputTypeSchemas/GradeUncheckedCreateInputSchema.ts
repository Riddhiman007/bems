import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { StudentUncheckedCreateNestedManyWithoutGradeInputSchema } from './StudentUncheckedCreateNestedManyWithoutGradeInputSchema';

export const GradeUncheckedCreateInputSchema: z.ZodType<Prisma.GradeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  teacher_name: z.string(),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGradeInputSchema).optional()
}).strict();

export default GradeUncheckedCreateInputSchema;
