import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TeacherUserIdUsernameEmailCompoundUniqueInputSchema: z.ZodType<Prisma.TeacherUserIdUsernameEmailCompoundUniqueInput> = z.object({
  userId: z.string(),
  username: z.string(),
  email: z.string()
}).strict();

export default TeacherUserIdUsernameEmailCompoundUniqueInputSchema;
