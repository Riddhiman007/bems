import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';
import { StudentUncheckedUpdateManyWithoutGradeNestedInputSchema } from './StudentUncheckedUpdateManyWithoutGradeNestedInputSchema';

export const GradeUncheckedUpdateWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeUncheckedUpdateWithoutClass_teacherInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGradeNestedInputSchema).optional()
}).strict();

export default GradeUncheckedUpdateWithoutClass_teacherInputSchema;
