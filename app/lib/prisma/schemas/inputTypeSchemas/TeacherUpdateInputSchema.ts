import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GradeUpdateOneWithoutClass_teacherNestedInputSchema } from './GradeUpdateOneWithoutClass_teacherNestedInputSchema';
import { UserUpdateOneRequiredWithoutTeacherNestedInputSchema } from './UserUpdateOneRequiredWithoutTeacherNestedInputSchema';

export const TeacherUpdateInputSchema: z.ZodType<Prisma.TeacherUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  class: z.lazy(() => GradeUpdateOneWithoutClass_teacherNestedInputSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutTeacherNestedInputSchema).optional()
}).strict();

export default TeacherUpdateInputSchema;
