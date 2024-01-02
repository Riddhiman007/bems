import type { Prisma } from '../../client';

import { z } from 'zod';

export const TeacherCreateManyInputSchema: z.ZodType<Prisma.TeacherCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  userId: z.string()
}).strict();

export default TeacherCreateManyInputSchema;
