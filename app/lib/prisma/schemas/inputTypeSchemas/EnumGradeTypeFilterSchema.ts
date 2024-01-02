import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { NestedEnumGradeTypeFilterSchema } from './NestedEnumGradeTypeFilterSchema';

export const EnumGradeTypeFilterSchema: z.ZodType<Prisma.EnumGradeTypeFilter> = z.object({
  equals: z.lazy(() => GradeTypeSchema).optional(),
  in: z.lazy(() => GradeTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => NestedEnumGradeTypeFilterSchema) ]).optional(),
}).strict();

export default EnumGradeTypeFilterSchema;
