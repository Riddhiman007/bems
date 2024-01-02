import { z } from 'zod';
import type { Prisma } from '../../client';
import { StudentWhereInputSchema } from '../inputTypeSchemas/StudentWhereInputSchema'
import { StudentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StudentOrderByWithAggregationInputSchema'
import { StudentScalarFieldEnumSchema } from '../inputTypeSchemas/StudentScalarFieldEnumSchema'
import { StudentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StudentScalarWhereWithAggregatesInputSchema'

export const StudentGroupByArgsSchema: z.ZodType<Prisma.StudentGroupByArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithAggregationInputSchema.array(),StudentOrderByWithAggregationInputSchema ]).optional(),
  by: StudentScalarFieldEnumSchema.array(),
  having: StudentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default StudentGroupByArgsSchema;
