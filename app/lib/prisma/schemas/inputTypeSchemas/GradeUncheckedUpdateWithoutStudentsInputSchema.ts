import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const GradeUncheckedUpdateWithoutStudentsInputSchema: z.ZodType<Prisma.GradeUncheckedUpdateWithoutStudentsInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  teacher_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default GradeUncheckedUpdateWithoutStudentsInputSchema;
