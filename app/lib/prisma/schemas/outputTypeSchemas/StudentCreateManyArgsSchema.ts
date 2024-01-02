import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StudentCreateManyInputSchema } from '../inputTypeSchemas/StudentCreateManyInputSchema'

export const StudentCreateManyArgsSchema: z.ZodType<Omit<Prisma.StudentCreateManyArgs, "data"> & { data: z.infer<typeof StudentCreateManyInputSchema> | z.infer<typeof StudentCreateManyInputSchema>[] }> = z.object({
  data: z.union([ StudentCreateManyInputSchema,StudentCreateManyInputSchema.array() ]),
}).strict() ;

export default StudentCreateManyArgsSchema;
