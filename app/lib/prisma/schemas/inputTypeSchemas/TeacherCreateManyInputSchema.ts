import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TeacherCreateManyInputSchema: z.ZodType<Prisma.TeacherCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string()
}).strict();

export default TeacherCreateManyInputSchema;
