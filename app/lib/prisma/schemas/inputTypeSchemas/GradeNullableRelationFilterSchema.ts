import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';

export const GradeNullableRelationFilterSchema: z.ZodType<Prisma.GradeNullableRelationFilter> = z.object({
  is: z.lazy(() => GradeWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GradeWhereInputSchema).optional().nullable()
}).strict();

export default GradeNullableRelationFilterSchema;
