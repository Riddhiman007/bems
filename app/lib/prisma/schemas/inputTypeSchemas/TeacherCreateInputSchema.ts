import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateNestedOneWithoutClass_teacherInputSchema } from './GradeCreateNestedOneWithoutClass_teacherInputSchema';
import { UserCreateNestedOneWithoutTeacherInputSchema } from './UserCreateNestedOneWithoutTeacherInputSchema';

export const TeacherCreateInputSchema: z.ZodType<Prisma.TeacherCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  class: z.lazy(() => GradeCreateNestedOneWithoutClass_teacherInputSchema).optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutTeacherInputSchema)
}).strict();

export default TeacherCreateInputSchema;
