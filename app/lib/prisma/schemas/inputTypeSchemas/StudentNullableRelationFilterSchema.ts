import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';

export const StudentNullableRelationFilterSchema: z.ZodType<Prisma.StudentNullableRelationFilter> = z.object({
  is: z.lazy(() => StudentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => StudentWhereInputSchema).optional().nullable()
}).strict();

export default StudentNullableRelationFilterSchema;
