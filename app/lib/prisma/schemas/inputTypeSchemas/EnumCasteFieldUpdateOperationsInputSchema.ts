import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CasteSchema } from './CasteSchema';

export const EnumCasteFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCasteFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CasteSchema).optional()
}).strict();

export default EnumCasteFieldUpdateOperationsInputSchema;
