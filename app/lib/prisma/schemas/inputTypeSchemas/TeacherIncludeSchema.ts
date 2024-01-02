import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TeacherIncludeSchema: z.ZodType<Prisma.TeacherInclude> = z.object({
}).strict()

export default TeacherIncludeSchema;
