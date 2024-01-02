import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';

export const GradeRelationFilterSchema: z.ZodType<Prisma.GradeRelationFilter> = z.object({
  is: z.lazy(() => GradeWhereInputSchema).optional(),
  isNot: z.lazy(() => GradeWhereInputSchema).optional()
}).strict();

export default GradeRelationFilterSchema;
