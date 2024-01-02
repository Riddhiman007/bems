import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherWhereInputSchema } from '../inputTypeSchemas/TeacherWhereInputSchema'
import { TeacherOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TeacherOrderByWithAggregationInputSchema'
import { TeacherScalarFieldEnumSchema } from '../inputTypeSchemas/TeacherScalarFieldEnumSchema'
import { TeacherScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TeacherScalarWhereWithAggregatesInputSchema'

export const TeacherGroupByArgsSchema: z.ZodType<Prisma.TeacherGroupByArgs> = z.object({
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithAggregationInputSchema.array(),TeacherOrderByWithAggregationInputSchema ]).optional(),
  by: TeacherScalarFieldEnumSchema.array(),
  having: TeacherScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TeacherGroupByArgsSchema;
