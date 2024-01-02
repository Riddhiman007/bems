import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereInputSchema } from '../inputTypeSchemas/StudentWhereInputSchema'
import { StudentOrderByWithRelationInputSchema } from '../inputTypeSchemas/StudentOrderByWithRelationInputSchema'
import { StudentWhereUniqueInputSchema } from '../inputTypeSchemas/StudentWhereUniqueInputSchema'

export const StudentAggregateArgsSchema: z.ZodType<Prisma.StudentAggregateArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
  orderBy: z.union([ StudentOrderByWithRelationInputSchema.array(),StudentOrderByWithRelationInputSchema ]).optional(),
  cursor: StudentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default StudentAggregateArgsSchema;
