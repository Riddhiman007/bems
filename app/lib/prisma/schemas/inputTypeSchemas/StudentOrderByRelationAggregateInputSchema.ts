import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StudentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StudentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StudentOrderByRelationAggregateInputSchema;
