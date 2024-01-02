import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumGradeTypeWithAggregatesFilterSchema } from './EnumGradeTypeWithAggregatesFilterSchema';
import { GradeTypeSchema } from './GradeTypeSchema';

export const GradeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GradeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GradeScalarWhereWithAggregatesInputSchema),z.lazy(() => GradeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeScalarWhereWithAggregatesInputSchema),z.lazy(() => GradeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => EnumGradeTypeWithAggregatesFilterSchema),z.lazy(() => GradeTypeSchema) ]).optional(),
  teacher_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default GradeScalarWhereWithAggregatesInputSchema;
