import { z } from 'zod';
import type { Prisma } from '../../client';
import { VerificationTokenWhereUniqueInputSchema } from '../inputTypeSchemas/VerificationTokenWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export default VerificationTokenFindUniqueOrThrowArgsSchema;
