import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGradeTypeFilterSchema } from './EnumGradeTypeFilterSchema';
import { GradeTypeSchema } from './GradeTypeSchema';

export const StudentScalarWhereInputSchema: z.ZodType<Prisma.StudentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fullname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  father_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mother_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caste: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isNew: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_name: z.union([ z.lazy(() => EnumGradeTypeFilterSchema),z.lazy(() => GradeTypeSchema) ]).optional(),
}).strict();

export default StudentScalarWhereInputSchema;
