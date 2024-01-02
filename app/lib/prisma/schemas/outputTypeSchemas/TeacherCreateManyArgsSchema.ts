import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherCreateManyInputSchema } from '../inputTypeSchemas/TeacherCreateManyInputSchema'

export const TeacherCreateManyArgsSchema: z.ZodType<Prisma.TeacherCreateManyArgs> = z.object({
  data: z.union([ TeacherCreateManyInputSchema,TeacherCreateManyInputSchema.array() ]),
}).strict() ;

export default TeacherCreateManyArgsSchema;
