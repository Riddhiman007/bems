import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeWhereInputSchema } from '../inputTypeSchemas/GradeWhereInputSchema'
import { GradeOrderByWithRelationInputSchema } from '../inputTypeSchemas/GradeOrderByWithRelationInputSchema'
import { GradeWhereUniqueInputSchema } from '../inputTypeSchemas/GradeWhereUniqueInputSchema'

export const GradeAggregateArgsSchema: z.ZodType<Prisma.GradeAggregateArgs> = z.object({
  where: GradeWhereInputSchema.optional(),
  orderBy: z.union([ GradeOrderByWithRelationInputSchema.array(),GradeOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GradeAggregateArgsSchema;
