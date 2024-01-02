import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeWhereInputSchema } from '../inputTypeSchemas/GradeWhereInputSchema'

export const GradeDeleteManyArgsSchema: z.ZodType<Prisma.GradeDeleteManyArgs> = z.object({
  where: GradeWhereInputSchema.optional(),
}).strict() ;

export default GradeDeleteManyArgsSchema;
