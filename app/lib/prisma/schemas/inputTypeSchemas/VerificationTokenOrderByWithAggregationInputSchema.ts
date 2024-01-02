import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VerificationTokenCountOrderByAggregateInputSchema } from './VerificationTokenCountOrderByAggregateInputSchema';
import { VerificationTokenMaxOrderByAggregateInputSchema } from './VerificationTokenMaxOrderByAggregateInputSchema';
import { VerificationTokenMinOrderByAggregateInputSchema } from './VerificationTokenMinOrderByAggregateInputSchema';

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export default VerificationTokenOrderByWithAggregationInputSchema;
