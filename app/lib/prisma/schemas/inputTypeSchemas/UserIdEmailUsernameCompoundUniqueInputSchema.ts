import type { Prisma } from '../../client';

import { z } from 'zod';

export const UserIdEmailUsernameCompoundUniqueInputSchema: z.ZodType<Prisma.UserIdEmailUsernameCompoundUniqueInput> = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string()
}).strict();

export default UserIdEmailUsernameCompoundUniqueInputSchema;
