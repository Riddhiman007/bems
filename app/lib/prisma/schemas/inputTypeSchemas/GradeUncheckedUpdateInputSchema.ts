import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { StudentUncheckedUpdateManyWithoutGradeNestedInputSchema } from './StudentUncheckedUpdateManyWithoutGradeNestedInputSchema';

export const GradeUncheckedUpdateInputSchema: z.ZodType<Prisma.GradeUncheckedUpdateInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
  teacher_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  students: z.lazy(() => StudentUncheckedUpdateManyWithoutGradeNestedInputSchema).optional()
}).strict();

export default GradeUncheckedUpdateInputSchema;
