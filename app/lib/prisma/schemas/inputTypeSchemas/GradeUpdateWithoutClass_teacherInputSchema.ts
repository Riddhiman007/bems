import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';
import { StudentUpdateManyWithoutGradeNestedInputSchema } from './StudentUpdateManyWithoutGradeNestedInputSchema';

export const GradeUpdateWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeUpdateWithoutClass_teacherInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGradeNestedInputSchema).optional()
}).strict();

export default GradeUpdateWithoutClass_teacherInputSchema;
