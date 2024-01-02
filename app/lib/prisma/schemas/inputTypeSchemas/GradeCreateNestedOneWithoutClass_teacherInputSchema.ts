import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeCreateWithoutClass_teacherInputSchema } from './GradeCreateWithoutClass_teacherInputSchema';
import { GradeUncheckedCreateWithoutClass_teacherInputSchema } from './GradeUncheckedCreateWithoutClass_teacherInputSchema';
import { GradeCreateOrConnectWithoutClass_teacherInputSchema } from './GradeCreateOrConnectWithoutClass_teacherInputSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';

export const GradeCreateNestedOneWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeCreateNestedOneWithoutClass_teacherInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedCreateWithoutClass_teacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeCreateOrConnectWithoutClass_teacherInputSchema).optional(),
  connect: z.lazy(() => GradeWhereUniqueInputSchema).optional()
}).strict();

export default GradeCreateNestedOneWithoutClass_teacherInputSchema;
