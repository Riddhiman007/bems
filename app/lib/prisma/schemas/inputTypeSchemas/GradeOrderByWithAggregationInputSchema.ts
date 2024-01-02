import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { GradeCountOrderByAggregateInputSchema } from './GradeCountOrderByAggregateInputSchema';
import { GradeMaxOrderByAggregateInputSchema } from './GradeMaxOrderByAggregateInputSchema';
import { GradeMinOrderByAggregateInputSchema } from './GradeMinOrderByAggregateInputSchema';

export const GradeOrderByWithAggregationInputSchema: z.ZodType<Prisma.GradeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  teacher_name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GradeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GradeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GradeMinOrderByAggregateInputSchema).optional()
}).strict();

export default GradeOrderByWithAggregationInputSchema;
