import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutStudentsInputSchema } from './GradeCreateWithoutStudentsInputSchema';
import { GradeUncheckedCreateWithoutStudentsInputSchema } from './GradeUncheckedCreateWithoutStudentsInputSchema';
import { GradeCreateOrConnectWithoutStudentsInputSchema } from './GradeCreateOrConnectWithoutStudentsInputSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';

export const GradeCreateNestedOneWithoutStudentsInputSchema: z.ZodType<Prisma.GradeCreateNestedOneWithoutStudentsInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeCreateOrConnectWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => GradeWhereUniqueInputSchema).optional()
}).strict();

export default GradeCreateNestedOneWithoutStudentsInputSchema;
