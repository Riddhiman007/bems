import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { NestedEnumGradeTypeWithAggregatesFilterSchema } from './NestedEnumGradeTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumGradeTypeFilterSchema } from './NestedEnumGradeTypeFilterSchema';

export const EnumGradeTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGradeTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GradeTypeSchema).optional(),
  in: z.lazy(() => GradeTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => NestedEnumGradeTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGradeTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGradeTypeFilterSchema).optional()
}).strict();

export default EnumGradeTypeWithAggregatesFilterSchema;
