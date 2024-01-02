import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeUncheckedCreateNestedOneWithoutClass_teacherInputSchema } from './GradeUncheckedCreateNestedOneWithoutClass_teacherInputSchema';

export const TeacherUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  class: z.lazy(() => GradeUncheckedCreateNestedOneWithoutClass_teacherInputSchema).optional()
}).strict();

export default TeacherUncheckedCreateWithoutUserInputSchema;
