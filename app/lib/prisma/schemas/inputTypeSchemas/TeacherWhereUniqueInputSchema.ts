import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { GradeNullableRelationFilterSchema } from './GradeNullableRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const TeacherWhereUniqueInputSchema: z.ZodType<Prisma.TeacherWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  class: z.union([ z.lazy(() => GradeNullableRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional().nullable(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default TeacherWhereUniqueInputSchema;
