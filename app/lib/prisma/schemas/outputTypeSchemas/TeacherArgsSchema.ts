import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherSelectSchema } from '../inputTypeSchemas/TeacherSelectSchema';
import { TeacherIncludeSchema } from '../inputTypeSchemas/TeacherIncludeSchema';

export const TeacherArgsSchema: z.ZodType<Prisma.TeacherDefaultArgs> = z.object({
  select: z.lazy(() => TeacherSelectSchema).optional(),
  include: z.lazy(() => TeacherIncludeSchema).optional(),
}).strict();

export default TeacherArgsSchema;
