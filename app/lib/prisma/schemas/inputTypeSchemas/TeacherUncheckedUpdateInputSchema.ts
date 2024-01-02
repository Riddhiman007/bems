import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GradeUncheckedUpdateOneWithoutClass_teacherNestedInputSchema } from './GradeUncheckedUpdateOneWithoutClass_teacherNestedInputSchema';

export const TeacherUncheckedUpdateInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  class: z.lazy(() => GradeUncheckedUpdateOneWithoutClass_teacherNestedInputSchema).optional()
}).strict();

export default TeacherUncheckedUpdateInputSchema;
