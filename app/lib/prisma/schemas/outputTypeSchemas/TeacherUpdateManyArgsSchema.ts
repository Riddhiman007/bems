import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherUpdateManyMutationInputSchema } from '../inputTypeSchemas/TeacherUpdateManyMutationInputSchema'
import { TeacherUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TeacherUncheckedUpdateManyInputSchema'
import { TeacherWhereInputSchema } from '../inputTypeSchemas/TeacherWhereInputSchema'

export const TeacherUpdateManyArgsSchema: z.ZodType<Prisma.TeacherUpdateManyArgs> = z.object({
  data: z.union([ TeacherUpdateManyMutationInputSchema,TeacherUncheckedUpdateManyInputSchema ]),
  where: TeacherWhereInputSchema.optional(),
}).strict() ;

export default TeacherUpdateManyArgsSchema;
