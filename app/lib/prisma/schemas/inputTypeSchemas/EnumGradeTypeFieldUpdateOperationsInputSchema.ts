import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';

export const EnumGradeTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGradeTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GradeTypeSchema).optional()
}).strict();

export default EnumGradeTypeFieldUpdateOperationsInputSchema;
