import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentWhereInputSchema } from '../inputTypeSchemas/StudentWhereInputSchema'

export const StudentDeleteManyArgsSchema: z.ZodType<Prisma.StudentDeleteManyArgs> = z.object({
  where: StudentWhereInputSchema.optional(),
}).strict() ;

export default StudentDeleteManyArgsSchema;
