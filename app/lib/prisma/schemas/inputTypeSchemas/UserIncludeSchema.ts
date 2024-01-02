import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export default UserIncludeSchema;
