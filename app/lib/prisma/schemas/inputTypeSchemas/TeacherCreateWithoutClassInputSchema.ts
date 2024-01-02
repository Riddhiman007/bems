import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutTeacherInputSchema } from './UserCreateNestedOneWithoutTeacherInputSchema';

export const TeacherCreateWithoutClassInputSchema: z.ZodType<Prisma.TeacherCreateWithoutClassInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  User: z.lazy(() => UserCreateNestedOneWithoutTeacherInputSchema)
}).strict();

export default TeacherCreateWithoutClassInputSchema;
