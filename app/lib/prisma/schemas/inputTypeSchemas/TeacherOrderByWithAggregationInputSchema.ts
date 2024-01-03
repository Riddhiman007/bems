import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeacherCountOrderByAggregateInputSchema } from './TeacherCountOrderByAggregateInputSchema';
import { TeacherMaxOrderByAggregateInputSchema } from './TeacherMaxOrderByAggregateInputSchema';
import { TeacherMinOrderByAggregateInputSchema } from './TeacherMinOrderByAggregateInputSchema';

export const TeacherOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeacherOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeacherCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeacherMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeacherMinOrderByAggregateInputSchema).optional()
}).strict();

export default TeacherOrderByWithAggregationInputSchema;
