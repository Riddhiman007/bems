import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeCreateWithoutClass_teacherInputSchema } from './GradeCreateWithoutClass_teacherInputSchema';
import { GradeUncheckedCreateWithoutClass_teacherInputSchema } from './GradeUncheckedCreateWithoutClass_teacherInputSchema';

export const GradeCreateOrConnectWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeCreateOrConnectWithoutClass_teacherInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeCreateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedCreateWithoutClass_teacherInputSchema) ]),
}).strict();

export default GradeCreateOrConnectWithoutClass_teacherInputSchema;
