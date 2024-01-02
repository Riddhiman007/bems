import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeUpdateWithoutClass_teacherInputSchema } from './GradeUpdateWithoutClass_teacherInputSchema';
import { GradeUncheckedUpdateWithoutClass_teacherInputSchema } from './GradeUncheckedUpdateWithoutClass_teacherInputSchema';
import { GradeCreateWithoutClass_teacherInputSchema } from './GradeCreateWithoutClass_teacherInputSchema';
import { GradeUncheckedCreateWithoutClass_teacherInputSchema } from './GradeUncheckedCreateWithoutClass_teacherInputSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';

export const GradeUpsertWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeUpsertWithoutClass_teacherInput> = z.object({
  update: z.union([ z.lazy(() => GradeUpdateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutClass_teacherInputSchema) ]),
  create: z.union([ z.lazy(() => GradeCreateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedCreateWithoutClass_teacherInputSchema) ]),
  where: z.lazy(() => GradeWhereInputSchema).optional()
}).strict();

export default GradeUpsertWithoutClass_teacherInputSchema;
