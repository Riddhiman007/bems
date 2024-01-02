import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentCreateWithoutGradeInputSchema } from './StudentCreateWithoutGradeInputSchema';
import { StudentUncheckedCreateWithoutGradeInputSchema } from './StudentUncheckedCreateWithoutGradeInputSchema';

export const StudentCreateOrConnectWithoutGradeInputSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutGradeInput> = z.object({
  where: z.lazy(() => StudentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StudentCreateWithoutGradeInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGradeInputSchema) ]),
}).strict();

export default StudentCreateOrConnectWithoutGradeInputSchema;
