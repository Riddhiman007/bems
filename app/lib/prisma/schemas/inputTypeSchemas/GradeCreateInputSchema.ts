import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { TeacherCreateNestedOneWithoutClassInputSchema } from './TeacherCreateNestedOneWithoutClassInputSchema';
import { StudentCreateNestedManyWithoutGradeInputSchema } from './StudentCreateNestedManyWithoutGradeInputSchema';

export const GradeCreateInputSchema: z.ZodType<Prisma.GradeCreateInput> = z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema),
  class_teacher: z.lazy(() => TeacherCreateNestedOneWithoutClassInputSchema),
  students: z.lazy(() => StudentCreateNestedManyWithoutGradeInputSchema).optional()
}).strict();

export default GradeCreateInputSchema;
