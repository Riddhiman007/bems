import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeCreateWithoutStudentsInputSchema } from './GradeCreateWithoutStudentsInputSchema';
import { GradeUncheckedCreateWithoutStudentsInputSchema } from './GradeUncheckedCreateWithoutStudentsInputSchema';

export const GradeCreateOrConnectWithoutStudentsInputSchema: z.ZodType<Prisma.GradeCreateOrConnectWithoutStudentsInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeCreateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutStudentsInputSchema) ]),
}).strict();

export default GradeCreateOrConnectWithoutStudentsInputSchema;
