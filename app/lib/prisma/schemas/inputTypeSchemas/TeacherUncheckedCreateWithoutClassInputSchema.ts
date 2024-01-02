import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TeacherUncheckedCreateWithoutClassInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateWithoutClassInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  userId: z.string()
}).strict();

export default TeacherUncheckedCreateWithoutClassInputSchema;
