import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';
import { TeacherUpdateOneRequiredWithoutClassNestedInputSchema } from './TeacherUpdateOneRequiredWithoutClassNestedInputSchema';
import { StudentUpdateManyWithoutGradeNestedInputSchema } from './StudentUpdateManyWithoutGradeNestedInputSchema';

export const GradeUpdateInputSchema: z.ZodType<Prisma.GradeUpdateInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  class_teacher: z.lazy(() => TeacherUpdateOneRequiredWithoutClassNestedInputSchema).optional(),
  students: z.lazy(() => StudentUpdateManyWithoutGradeNestedInputSchema).optional()
}).strict();

export default GradeUpdateInputSchema;
