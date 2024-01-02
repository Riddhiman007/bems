import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';
import { TeacherUpdateOneRequiredWithoutClassNestedInputSchema } from './TeacherUpdateOneRequiredWithoutClassNestedInputSchema';

export const GradeUpdateWithoutStudentsInputSchema: z.ZodType<Prisma.GradeUpdateWithoutStudentsInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  class_teacher: z.lazy(() => TeacherUpdateOneRequiredWithoutClassNestedInputSchema).optional()
}).strict();

export default GradeUpdateWithoutStudentsInputSchema;
