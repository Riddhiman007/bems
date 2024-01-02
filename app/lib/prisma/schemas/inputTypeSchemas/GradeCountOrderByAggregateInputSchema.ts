import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const GradeCountOrderByAggregateInputSchema: z.ZodType<Prisma.GradeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  teacher_name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default GradeCountOrderByAggregateInputSchema;
