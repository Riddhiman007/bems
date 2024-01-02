import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { GradeUpdateWithoutClass_teacherInputSchema } from './GradeUpdateWithoutClass_teacherInputSchema';
import { GradeUncheckedUpdateWithoutClass_teacherInputSchema } from './GradeUncheckedUpdateWithoutClass_teacherInputSchema';

export const GradeUpdateToOneWithWhereWithoutClass_teacherInputSchema: z.ZodType<Prisma.GradeUpdateToOneWithWhereWithoutClass_teacherInput> = z.object({
  where: z.lazy(() => GradeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GradeUpdateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutClass_teacherInputSchema) ]),
}).strict();

export default GradeUpdateToOneWithWhereWithoutClass_teacherInputSchema;
