import { z } from 'zod';
import type { Prisma } from '../../client';

export const StudentIncludeSchema: z.ZodType<Prisma.StudentInclude> = z.object({
}).strict()

export default StudentIncludeSchema;
