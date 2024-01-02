import { z } from 'zod';
import type { Prisma } from '../../client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  posts: z.boolean().optional(),
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
