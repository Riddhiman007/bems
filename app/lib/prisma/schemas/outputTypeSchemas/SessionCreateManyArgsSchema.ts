import { z } from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateManyInputSchema } from '../inputTypeSchemas/SessionCreateManyInputSchema'

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
}).strict() ;

export default SessionCreateManyArgsSchema;
