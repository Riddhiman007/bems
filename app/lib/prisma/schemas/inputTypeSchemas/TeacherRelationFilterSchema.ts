import type { Prisma } from '../../client';

import { z } from 'zod';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';

export const TeacherRelationFilterSchema: z.ZodType<Prisma.TeacherRelationFilter> = z.object({
  is: z.lazy(() => TeacherWhereInputSchema).optional(),
  isNot: z.lazy(() => TeacherWhereInputSchema).optional()
}).strict();

export default TeacherRelationFilterSchema;
