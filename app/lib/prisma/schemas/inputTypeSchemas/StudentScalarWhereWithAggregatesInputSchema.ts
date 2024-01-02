import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumGenderWithAggregatesFilterSchema } from './EnumGenderWithAggregatesFilterSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGradeTypeWithAggregatesFilterSchema } from './EnumGradeTypeWithAggregatesFilterSchema';
import { GradeTypeSchema } from './GradeTypeSchema';

export const StudentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StudentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereWithAggregatesInputSchema),z.lazy(() => StudentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fullname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  father_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mother_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contact: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  caste: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderWithAggregatesFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  grade_name: z.union([ z.lazy(() => EnumGradeTypeWithAggregatesFilterSchema),z.lazy(() => GradeTypeSchema) ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default StudentScalarWhereWithAggregatesInputSchema;
