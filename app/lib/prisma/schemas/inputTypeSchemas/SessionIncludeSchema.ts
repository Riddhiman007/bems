import { z } from 'zod';
import type { Prisma } from '../../client';

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
}).strict()

export default SessionIncludeSchema;
