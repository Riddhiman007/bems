import { z } from 'zod';
import type { Prisma } from '../../client';
import { SessionWhereInputSchema } from '../inputTypeSchemas/SessionWhereInputSchema'

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export default SessionDeleteManyArgsSchema;
