import { z } from 'zod';
import type { Prisma } from '../../client';

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
}).strict()

export default AccountIncludeSchema;
