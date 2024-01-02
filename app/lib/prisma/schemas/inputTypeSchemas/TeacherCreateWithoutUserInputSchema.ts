import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateNestedOneWithoutClass_teacherInputSchema } from './GradeCreateNestedOneWithoutClass_teacherInputSchema';

export const TeacherCreateWithoutUserInputSchema: z.ZodType<Prisma.TeacherCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  class: z.lazy(() => GradeCreateNestedOneWithoutClass_teacherInputSchema).optional()
}).strict();

export default TeacherCreateWithoutUserInputSchema;
