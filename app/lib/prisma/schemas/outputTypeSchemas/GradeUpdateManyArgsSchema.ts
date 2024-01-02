import { z } from 'zod';
import type { Prisma } from '../../client';
import { GradeUpdateManyMutationInputSchema } from '../inputTypeSchemas/GradeUpdateManyMutationInputSchema'
import { GradeUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GradeUncheckedUpdateManyInputSchema'
import { GradeWhereInputSchema } from '../inputTypeSchemas/GradeWhereInputSchema'

export const GradeUpdateManyArgsSchema: z.ZodType<Prisma.GradeUpdateManyArgs> = z.object({
  data: z.union([ GradeUpdateManyMutationInputSchema,GradeUncheckedUpdateManyInputSchema ]),
  where: GradeWhereInputSchema.optional(),
}).strict() ;

export default GradeUpdateManyArgsSchema;
