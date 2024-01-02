import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const GradeIncludeSchema: z.ZodType<Prisma.GradeInclude> = z.object({
}).strict()

export default GradeIncludeSchema;
