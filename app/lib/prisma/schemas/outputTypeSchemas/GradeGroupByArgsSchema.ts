import { z } from 'zod';
import type { Prisma } from '../../client';
import { GradeWhereInputSchema } from '../inputTypeSchemas/GradeWhereInputSchema'
import { GradeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GradeOrderByWithAggregationInputSchema'
import { GradeScalarFieldEnumSchema } from '../inputTypeSchemas/GradeScalarFieldEnumSchema'
import { GradeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GradeScalarWhereWithAggregatesInputSchema'

export const GradeGroupByArgsSchema: z.ZodType<Prisma.GradeGroupByArgs> = z.object({
  where: GradeWhereInputSchema.optional(),
  orderBy: z.union([ GradeOrderByWithAggregationInputSchema.array(),GradeOrderByWithAggregationInputSchema ]).optional(),
  by: GradeScalarFieldEnumSchema.array(),
  having: GradeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GradeGroupByArgsSchema;
