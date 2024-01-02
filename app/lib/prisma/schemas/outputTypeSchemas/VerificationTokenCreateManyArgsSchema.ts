import { z } from 'zod';
import type { Prisma } from '../../client';
import { VerificationTokenCreateManyInputSchema } from '../inputTypeSchemas/VerificationTokenCreateManyInputSchema'

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
}).strict() ;

export default VerificationTokenCreateManyArgsSchema;
