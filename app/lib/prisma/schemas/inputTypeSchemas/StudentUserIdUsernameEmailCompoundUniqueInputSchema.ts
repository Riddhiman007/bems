import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StudentUserIdUsernameEmailCompoundUniqueInputSchema: z.ZodType<Prisma.StudentUserIdUsernameEmailCompoundUniqueInput> = z.object({
  userId: z.string(),
  username: z.string(),
  email: z.string()
}).strict();

export default StudentUserIdUsernameEmailCompoundUniqueInputSchema;
