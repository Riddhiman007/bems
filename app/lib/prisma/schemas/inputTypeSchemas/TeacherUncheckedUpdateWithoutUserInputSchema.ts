import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GradeUncheckedUpdateOneWithoutClass_teacherNestedInputSchema } from './GradeUncheckedUpdateOneWithoutClass_teacherNestedInputSchema';

export const TeacherUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  class: z.lazy(() => GradeUncheckedUpdateOneWithoutClass_teacherNestedInputSchema).optional()
}).strict();

export default TeacherUncheckedUpdateWithoutUserInputSchema;
