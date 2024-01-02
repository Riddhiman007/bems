import type { Prisma } from '../../client';

import { z } from 'zod';
import { GenderSchema } from './GenderSchema';

export const EnumGenderFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGenderFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GenderSchema).optional()
}).strict();

export default EnumGenderFieldUpdateOperationsInputSchema;
