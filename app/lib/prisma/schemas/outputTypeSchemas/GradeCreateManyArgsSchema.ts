import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeCreateManyInputSchema } from '../inputTypeSchemas/GradeCreateManyInputSchema'

export const GradeCreateManyArgsSchema: z.ZodType<Prisma.GradeCreateManyArgs> = z.object({
  data: z.union([ GradeCreateManyInputSchema,GradeCreateManyInputSchema.array() ]),
}).strict() ;

export default GradeCreateManyArgsSchema;
