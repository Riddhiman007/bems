import { z } from 'zod';
import type { Prisma } from '../../client';
import { StudentUpdateManyMutationInputSchema } from '../inputTypeSchemas/StudentUpdateManyMutationInputSchema'
import { StudentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StudentUncheckedUpdateManyInputSchema'
import { StudentWhereInputSchema } from '../inputTypeSchemas/StudentWhereInputSchema'

export const StudentUpdateManyArgsSchema: z.ZodType<Omit<Prisma.StudentUpdateManyArgs, "data"> & { data: z.infer<typeof StudentUpdateManyMutationInputSchema> | z.infer<typeof StudentUncheckedUpdateManyInputSchema> }> = z.object({
  data: z.union([ StudentUpdateManyMutationInputSchema,StudentUncheckedUpdateManyInputSchema ]),
  where: StudentWhereInputSchema.optional(),
}).strict() ;

export default StudentUpdateManyArgsSchema;
