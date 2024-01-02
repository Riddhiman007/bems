import type { Prisma } from '../../client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { GradeNullableRelationFilterSchema } from './GradeNullableRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const TeacherWhereInputSchema: z.ZodType<Prisma.TeacherWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  class: z.union([ z.lazy(() => GradeNullableRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default TeacherWhereInputSchema;
