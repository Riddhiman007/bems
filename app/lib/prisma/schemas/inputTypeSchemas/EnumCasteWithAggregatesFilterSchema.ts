import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CasteSchema } from './CasteSchema';
import { NestedEnumCasteWithAggregatesFilterSchema } from './NestedEnumCasteWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCasteFilterSchema } from './NestedEnumCasteFilterSchema';

export const EnumCasteWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCasteWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CasteSchema).optional(),
  in: z.lazy(() => CasteSchema).array().optional(),
  notIn: z.lazy(() => CasteSchema).array().optional(),
  not: z.union([ z.lazy(() => CasteSchema),z.lazy(() => NestedEnumCasteWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCasteFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCasteFilterSchema).optional()
}).strict();

export default EnumCasteWithAggregatesFilterSchema;
