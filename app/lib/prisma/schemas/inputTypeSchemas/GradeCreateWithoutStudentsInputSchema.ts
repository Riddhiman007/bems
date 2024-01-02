import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { TeacherCreateNestedOneWithoutClassInputSchema } from './TeacherCreateNestedOneWithoutClassInputSchema';

export const GradeCreateWithoutStudentsInputSchema: z.ZodType<Prisma.GradeCreateWithoutStudentsInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  class_teacher: z.lazy(() => TeacherCreateNestedOneWithoutClassInputSchema)
}).strict();

export default GradeCreateWithoutStudentsInputSchema;
