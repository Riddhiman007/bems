import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { EnumGradeTypeFieldUpdateOperationsInputSchema } from './EnumGradeTypeFieldUpdateOperationsInputSchema';

export const GradeUpdateManyMutationInputSchema: z.ZodType<Prisma.GradeUpdateManyMutationInput> = z.object({
  grade: z.union([ z.lazy(() => GradeTypeSchema),z.lazy(() => EnumGradeTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default GradeUpdateManyMutationInputSchema;
