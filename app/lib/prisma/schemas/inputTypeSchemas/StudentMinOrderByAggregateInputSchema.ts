import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const StudentMinOrderByAggregateInputSchema: z.ZodType<Prisma.StudentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  father_name: z.lazy(() => SortOrderSchema).optional(),
  mother_name: z.lazy(() => SortOrderSchema).optional(),
  contact: z.lazy(() => SortOrderSchema).optional(),
  caste: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  grade_name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default StudentMinOrderByAggregateInputSchema;
