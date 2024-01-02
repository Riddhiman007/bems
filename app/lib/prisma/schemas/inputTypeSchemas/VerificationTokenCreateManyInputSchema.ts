import type { Prisma } from '../../client';

import { z } from 'zod';

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  id: z.string().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export default VerificationTokenCreateManyInputSchema;
