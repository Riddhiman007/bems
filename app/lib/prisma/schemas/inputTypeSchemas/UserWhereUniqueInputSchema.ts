import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserIdEmailUsernameCompoundUniqueInputSchema } from './UserIdEmailUsernameCompoundUniqueInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumRoleFilterSchema } from './EnumRoleFilterSchema';
import { RoleSchema } from './RoleSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StudentNullableRelationFilterSchema } from './StudentNullableRelationFilterSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { TeacherNullableRelationFilterSchema } from './TeacherNullableRelationFilterSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { PostListRelationFilterSchema } from './PostListRelationFilterSchema';
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema';
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    id_email_username: z.lazy(() => UserIdEmailUsernameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    id_email_username: z.lazy(() => UserIdEmailUsernameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  id_email_username: z.lazy(() => UserIdEmailUsernameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  fullname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  student: z.union([ z.lazy(() => StudentNullableRelationFilterSchema),z.lazy(() => StudentWhereInputSchema) ]).optional().nullable(),
  teacher: z.union([ z.lazy(() => TeacherNullableRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostListRelationFilterSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
