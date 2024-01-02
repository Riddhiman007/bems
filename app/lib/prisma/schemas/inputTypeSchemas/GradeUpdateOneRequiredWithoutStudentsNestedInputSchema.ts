import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutStudentsInputSchema } from './GradeCreateWithoutStudentsInputSchema';
import { GradeUncheckedCreateWithoutStudentsInputSchema } from './GradeUncheckedCreateWithoutStudentsInputSchema';
import { GradeCreateOrConnectWithoutStudentsInputSchema } from './GradeCreateOrConnectWithoutStudentsInputSchema';
import { GradeUpsertWithoutStudentsInputSchema } from './GradeUpsertWithoutStudentsInputSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateToOneWithWhereWithoutStudentsInputSchema } from './GradeUpdateToOneWithWhereWithoutStudentsInputSchema';
import { GradeUpdateWithoutStudentsInputSchema } from './GradeUpdateWithoutStudentsInputSchema';
import { GradeUncheckedUpdateWithoutStudentsInputSchema } from './GradeUncheckedUpdateWithoutStudentsInputSchema';

export const GradeUpdateOneRequiredWithoutStudentsNestedInputSchema: z.ZodType<Prisma.GradeUpdateOneRequiredWithoutStudentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeCreateOrConnectWithoutStudentsInputSchema).optional(),
  upsert: z.lazy(() => GradeUpsertWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => GradeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GradeUpdateToOneWithWhereWithoutStudentsInputSchema),z.lazy(() => GradeUpdateWithoutStudentsInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutStudentsInputSchema) ]).optional(),
}).strict();

export default GradeUpdateOneRequiredWithoutStudentsNestedInputSchema;
