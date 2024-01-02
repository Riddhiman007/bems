import { z } from 'zod';
import type { Prisma } from '../../client';
import { StudentSelectSchema } from '../inputTypeSchemas/StudentSelectSchema';
import { StudentIncludeSchema } from '../inputTypeSchemas/StudentIncludeSchema';

export const StudentArgsSchema: z.ZodType<Prisma.StudentDefaultArgs> = z.object({
  select: z.lazy(() => StudentSelectSchema).optional(),
  include: z.lazy(() => StudentIncludeSchema).optional(),
}).strict();

export default StudentArgsSchema;
