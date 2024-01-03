import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const TeacherScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeacherScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema),z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema),z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default TeacherScalarWhereWithAggregatesInputSchema;
