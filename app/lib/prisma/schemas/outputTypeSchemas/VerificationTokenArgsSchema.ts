import { z } from 'zod';
import type { Prisma } from '../../client';
import { VerificationTokenSelectSchema } from '../inputTypeSchemas/VerificationTokenSelectSchema';

export const VerificationTokenArgsSchema: z.ZodType<Prisma.VerificationTokenDefaultArgs> = z.object({
  select: z.lazy(() => VerificationTokenSelectSchema).optional(),
}).strict();

export default VerificationTokenArgsSchema;
