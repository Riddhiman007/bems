import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherWhereInputSchema } from '../inputTypeSchemas/TeacherWhereInputSchema'
import { TeacherOrderByWithRelationInputSchema } from '../inputTypeSchemas/TeacherOrderByWithRelationInputSchema'
import { TeacherWhereUniqueInputSchema } from '../inputTypeSchemas/TeacherWhereUniqueInputSchema'

export const TeacherAggregateArgsSchema: z.ZodType<Prisma.TeacherAggregateArgs> = z.object({
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithRelationInputSchema.array(),TeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: TeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TeacherAggregateArgsSchema;
