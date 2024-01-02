import type { Prisma } from '../../client';

import { z } from 'zod';
import { TeacherUserIdUsernameEmailCompoundUniqueInputSchema } from './TeacherUserIdUsernameEmailCompoundUniqueInputSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { GradeNullableRelationFilterSchema } from './GradeNullableRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const TeacherWhereUniqueInputSchema: z.ZodType<Prisma.TeacherWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    username: z.string(),
    userId_username_email: z.lazy(() => TeacherUserIdUsernameEmailCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    username: z.string(),
  }),
  z.object({
    id: z.string(),
    userId_username_email: z.lazy(() => TeacherUserIdUsernameEmailCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    username: z.string(),
    userId_username_email: z.lazy(() => TeacherUserIdUsernameEmailCompoundUniqueInputSchema),
  }),
  z.object({
    username: z.string(),
  }),
  z.object({
    userId_username_email: z.lazy(() => TeacherUserIdUsernameEmailCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  username: z.string().optional(),
  userId_username_email: z.lazy(() => TeacherUserIdUsernameEmailCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  class: z.union([ z.lazy(() => GradeNullableRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default TeacherWhereUniqueInputSchema;
