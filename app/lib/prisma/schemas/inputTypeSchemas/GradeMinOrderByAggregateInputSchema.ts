import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GradeMinOrderByAggregateInputSchema: z.ZodType<Prisma.GradeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  teacher_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GradeMinOrderByAggregateInputSchema;
