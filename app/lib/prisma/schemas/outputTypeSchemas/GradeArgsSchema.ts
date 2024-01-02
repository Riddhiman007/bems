import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeSelectSchema } from '../inputTypeSchemas/GradeSelectSchema';
import { GradeIncludeSchema } from '../inputTypeSchemas/GradeIncludeSchema';

export const GradeArgsSchema: z.ZodType<Prisma.GradeDefaultArgs> = z.object({
  select: z.lazy(() => GradeSelectSchema).optional(),
  include: z.lazy(() => GradeIncludeSchema).optional(),
}).strict();

export default GradeArgsSchema;
