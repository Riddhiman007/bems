import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { StudentUserIdUsernameEmailCompoundUniqueInputSchema } from './StudentUserIdUsernameEmailCompoundUniqueInputSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { GradeRelationFilterSchema } from './GradeRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const StudentWhereUniqueInputSchema: z.ZodType<Omit<Prisma.StudentWhereUniqueInput, "id" | "userId">> = z.union([
  z.object({
    // omitted: id: z.string(),
    grade_name: z.lazy(() => GradeTypeSchema),
    userId_username_email: z.lazy(() => StudentUserIdUsernameEmailCompoundUniqueInputSchema)
  }),
  z.object({
    // omitted: id: z.string(),
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    // omitted: id: z.string(),
    userId_username_email: z.lazy(() => StudentUserIdUsernameEmailCompoundUniqueInputSchema),
  }),
  z.object({
    // omitted: id: z.string(),
  }),
  z.object({
    grade_name: z.lazy(() => GradeTypeSchema),
    userId_username_email: z.lazy(() => StudentUserIdUsernameEmailCompoundUniqueInputSchema),
  }),
  z.object({
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    userId_username_email: z.lazy(() => StudentUserIdUsernameEmailCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  // omitted: id: z.string().optional(),
  grade_name: z.lazy(() => GradeTypeSchema).optional(),
  userId_username_email: z.lazy(() => StudentUserIdUsernameEmailCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  fullname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  father_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  mother_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caste: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  // omitted: userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => GradeRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default StudentWhereUniqueInputSchema;
