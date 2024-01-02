import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeUpdateWithoutStudentsInputSchema } from './GradeUpdateWithoutStudentsInputSchema';
import { GradeUncheckedUpdateWithoutStudentsInputSchema } from './GradeUncheckedUpdateWithoutStudentsInputSchema';
import { GradeCreateWithoutStudentsInputSchema } from './GradeCreateWithoutStudentsInputSchema';
import { GradeUncheckedCreateWithoutStudentsInputSchema } from './GradeUncheckedCreateWithoutStudentsInputSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';

export const GradeUpsertWithoutStudentsInputSchema: z.ZodType<Prisma.GradeUpsertWithoutStudentsInput> = z.object({
  update: z.union([ z.lazy(() => GradeUpdateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutStudentsInputSchema) ]),
  create: z.union([ z.lazy(() => GradeCreateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutStudentsInputSchema) ]),
  where: z.lazy(() => GradeWhereInputSchema).optional()
}).strict();

export default GradeUpsertWithoutStudentsInputSchema;
