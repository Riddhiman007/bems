import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherWhereInputSchema } from '../inputTypeSchemas/TeacherWhereInputSchema'

export const TeacherDeleteManyArgsSchema: z.ZodType<Prisma.TeacherDeleteManyArgs> = z.object({
  where: TeacherWhereInputSchema.optional(),
}).strict() ;

export default TeacherDeleteManyArgsSchema;
