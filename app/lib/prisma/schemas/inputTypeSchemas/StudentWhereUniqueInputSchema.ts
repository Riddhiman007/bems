import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { GradeRelationFilterSchema } from './GradeRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const StudentWhereUniqueInputSchema: z.ZodType<Omit<Prisma.StudentWhereUniqueInput, "id" | "isNew">> = z.union([
  z.object({
    // omitted: id: z.string(),
    email: z.string(),
    grade_name: z.lazy(() => GradeTypeSchema)
  }),
  z.object({
    // omitted: id: z.string(),
    email: z.string(),
  }),
  z.object({
    // omitted: id: z.string(),
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    // omitted: id: z.string(),
  }),
  z.object({
    email: z.string(),
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
])
.and(z.object({
  // omitted: id: z.string().optional(),
  email: z.string().optional(),
  grade_name: z.lazy(() => GradeTypeSchema).optional(),
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  fullname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  father_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mother_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caste: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  // omitted: isNew: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  grade: z.union([ z.lazy(() => GradeRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default StudentWhereUniqueInputSchema;
