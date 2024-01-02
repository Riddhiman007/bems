import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GradeUpdateOneWithoutClass_teacherNestedInputSchema } from './GradeUpdateOneWithoutClass_teacherNestedInputSchema';

export const TeacherUpdateWithoutUserInputSchema: z.ZodType<Prisma.TeacherUpdateWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  class: z.lazy(() => GradeUpdateOneWithoutClass_teacherNestedInputSchema).optional()
}).strict();

export default TeacherUpdateWithoutUserInputSchema;
