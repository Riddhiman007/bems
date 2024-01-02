import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateWithoutGradeInputSchema } from './StudentUpdateWithoutGradeInputSchema';
import { StudentUncheckedUpdateWithoutGradeInputSchema } from './StudentUncheckedUpdateWithoutGradeInputSchema';
import { StudentCreateWithoutGradeInputSchema } from './StudentCreateWithoutGradeInputSchema';
import { StudentUncheckedCreateWithoutGradeInputSchema } from './StudentUncheckedCreateWithoutGradeInputSchema';

export const StudentUpsertWithWhereUniqueWithoutGradeInputSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutGradeInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StudentUpdateWithoutGradeInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutGradeInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutGradeInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGradeInputSchema) ]),
}).strict();

export default StudentUpsertWithWhereUniqueWithoutGradeInputSchema;
