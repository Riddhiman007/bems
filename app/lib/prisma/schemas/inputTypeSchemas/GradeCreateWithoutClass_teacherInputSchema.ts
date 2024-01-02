import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { StudentCreateNestedManyWithoutGradeInputSchema } from './StudentCreateNestedManyWithoutGradeInputSchema';

export const GradeCreateWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeCreateWithoutClass_teacherInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  students: z.lazy(() => StudentCreateNestedManyWithoutGradeInputSchema).optional()
}).strict();

export default GradeCreateWithoutClass_teacherInputSchema;
