import type { Prisma } from '../../client';

import { z } from 'zod';
import { GenderSchema } from './GenderSchema';
import { NestedEnumGenderFilterSchema } from './NestedEnumGenderFilterSchema';

export const EnumGenderFilterSchema: z.ZodType<Prisma.EnumGenderFilter> = z.object({
  equals: z.lazy(() => GenderSchema).optional(),
  in: z.lazy(() => GenderSchema).array().optional(),
  notIn: z.lazy(() => GenderSchema).array().optional(),
  not: z.union([ z.lazy(() => GenderSchema),z.lazy(() => NestedEnumGenderFilterSchema) ]).optional(),
}).strict();

export default EnumGenderFilterSchema;
