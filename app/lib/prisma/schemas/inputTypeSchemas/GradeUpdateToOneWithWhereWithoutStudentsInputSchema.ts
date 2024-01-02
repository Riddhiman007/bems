import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { GradeUpdateWithoutStudentsInputSchema } from './GradeUpdateWithoutStudentsInputSchema';
import { GradeUncheckedUpdateWithoutStudentsInputSchema } from './GradeUncheckedUpdateWithoutStudentsInputSchema';

export const GradeUpdateToOneWithWhereWithoutStudentsInputSchema: z.ZodType<Prisma.GradeUpdateToOneWithWhereWithoutStudentsInput> = z.object({
  where: z.lazy(() => GradeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GradeUpdateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutStudentsInputSchema) ]),
}).strict();

export default GradeUpdateToOneWithWhereWithoutStudentsInputSchema;
