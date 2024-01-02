import type { Prisma } from '../../client';

import { z } from 'zod';
import { StudentScalarWhereInputSchema } from './StudentScalarWhereInputSchema';
import { StudentUpdateManyMutationInputSchema } from './StudentUpdateManyMutationInputSchema';
import { StudentUncheckedUpdateManyWithoutGradeInputSchema } from './StudentUncheckedUpdateManyWithoutGradeInputSchema';

export const StudentUpdateManyWithWhereWithoutGradeInputSchema: z.ZodType<Prisma.StudentUpdateManyWithWhereWithoutGradeInput> = z.object({
  where: z.lazy(() => StudentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StudentUpdateManyMutationInputSchema),z.lazy(() => StudentUncheckedUpdateManyWithoutGradeInputSchema) ]),
}).strict();

export default StudentUpdateManyWithWhereWithoutGradeInputSchema;
