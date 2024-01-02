import type { Prisma } from '../../client';

import { z } from 'zod';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { StudentUpdateWithoutUserInputSchema } from './StudentUpdateWithoutUserInputSchema';
import { StudentUncheckedUpdateWithoutUserInputSchema } from './StudentUncheckedUpdateWithoutUserInputSchema';

export const StudentUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => StudentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default StudentUpdateToOneWithWhereWithoutUserInputSchema;
