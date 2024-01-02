import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';

export const NestedEnumGradeTypeFilterSchema: z.ZodType<Prisma.NestedEnumGradeTypeFilter> = z.object({
  equals: z.lazy(() => GradeTypeSchema).optional(),
  in: z.lazy(() => GradeTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => NestedEnumGradeTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumGradeTypeFilterSchema;
