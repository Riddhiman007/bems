import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';

export const TeacherNullableRelationFilterSchema: z.ZodType<Prisma.TeacherNullableRelationFilter> = z.object({
  is: z.lazy(() => TeacherWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TeacherWhereInputSchema).optional().nullable()
}).strict();

export default TeacherNullableRelationFilterSchema;
