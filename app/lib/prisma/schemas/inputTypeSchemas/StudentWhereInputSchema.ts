import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumCasteFilterSchema } from './EnumCasteFilterSchema';
import { CasteSchema } from './CasteSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGradeTypeFilterSchema } from './EnumGradeTypeFilterSchema';
import { GradeTypeSchema } from './GradeTypeSchema';
import { GradeRelationFilterSchema } from './GradeRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const StudentWhereInputSchema: z.ZodType<Prisma.StudentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fullname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  father_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mother_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caste: z.union([ z.lazy(() => EnumCasteFilterSchema),z.lazy(() => CasteSchema) ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isNew: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_name: z.union([ z.lazy(() => EnumGradeTypeFilterSchema),z.lazy(() => GradeTypeSchema) ]).optional(),
  grade: z.union([ z.lazy(() => GradeRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default StudentWhereInputSchema;
