import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateWithoutGradeInputSchema } from './StudentUpdateWithoutGradeInputSchema';
import { StudentUncheckedUpdateWithoutGradeInputSchema } from './StudentUncheckedUpdateWithoutGradeInputSchema';

export const StudentUpdateWithWhereUniqueWithoutGradeInputSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutGradeInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StudentUpdateWithoutGradeInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutGradeInputSchema) ]),
}).strict();

export default StudentUpdateWithWhereUniqueWithoutGradeInputSchema;
