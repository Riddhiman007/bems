import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CasteSchema } from './CasteSchema';
import { NestedEnumCasteFilterSchema } from './NestedEnumCasteFilterSchema';

export const EnumCasteFilterSchema: z.ZodType<Prisma.EnumCasteFilter> = z.object({
  equals: z.lazy(() => CasteSchema).optional(),
  in: z.lazy(() => CasteSchema).array().optional(),
  notIn: z.lazy(() => CasteSchema).array().optional(),
  not: z.union([ z.lazy(() => CasteSchema),z.lazy(() => NestedEnumCasteFilterSchema) ]).optional(),
}).strict();

export default EnumCasteFilterSchema;
