import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { StudentUncheckedCreateNestedManyWithoutGradeInputSchema } from './StudentUncheckedCreateNestedManyWithoutGradeInputSchema';

export const GradeUncheckedCreateWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeUncheckedCreateWithoutClass_teacherInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  students: z.lazy(() => StudentUncheckedCreateNestedManyWithoutGradeInputSchema).optional()
}).strict();

export default GradeUncheckedCreateWithoutClass_teacherInputSchema;
