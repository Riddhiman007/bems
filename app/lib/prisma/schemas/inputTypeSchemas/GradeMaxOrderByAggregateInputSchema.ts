import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GradeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GradeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  teacher_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GradeMaxOrderByAggregateInputSchema;
