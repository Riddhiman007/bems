import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeUncheckedCreateNestedOneWithoutClass_teacherInputSchema } from './GradeUncheckedCreateNestedOneWithoutClass_teacherInputSchema';

export const TeacherUncheckedCreateInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  userId: z.string(),
  class: z.lazy(() => GradeUncheckedCreateNestedOneWithoutClass_teacherInputSchema).optional()
}).strict();

export default TeacherUncheckedCreateInputSchema;
