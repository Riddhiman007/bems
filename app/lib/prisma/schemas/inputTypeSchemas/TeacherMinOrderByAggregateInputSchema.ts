import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TeacherMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeacherMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TeacherMinOrderByAggregateInputSchema;
