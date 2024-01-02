import type { Prisma } from '../../client';

import { z } from 'zod';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';

export const StudentListRelationFilterSchema: z.ZodType<Prisma.StudentListRelationFilter> = z.object({
  every: z.lazy(() => StudentWhereInputSchema).optional(),
  some: z.lazy(() => StudentWhereInputSchema).optional(),
  none: z.lazy(() => StudentWhereInputSchema).optional()
}).strict();

export default StudentListRelationFilterSchema;
