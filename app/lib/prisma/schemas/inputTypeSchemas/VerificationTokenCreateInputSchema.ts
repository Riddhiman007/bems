import type { Prisma } from '../../client';

import { z } from 'zod';

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  id: z.string().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default VerificationTokenCreateInputSchema;
