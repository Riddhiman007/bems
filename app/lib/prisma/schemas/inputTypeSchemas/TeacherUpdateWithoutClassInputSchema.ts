import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutTeacherNestedInputSchema } from './UserUpdateOneRequiredWithoutTeacherNestedInputSchema';

export const TeacherUpdateWithoutClassInputSchema: z.ZodType<Prisma.TeacherUpdateWithoutClassInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutTeacherNestedInputSchema).optional()
}).strict();

export default TeacherUpdateWithoutClassInputSchema;
