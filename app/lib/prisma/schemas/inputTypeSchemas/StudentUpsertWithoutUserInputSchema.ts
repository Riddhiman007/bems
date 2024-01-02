import type { Prisma } from '../../client';

import { z } from 'zod';
import { StudentUpdateWithoutUserInputSchema } from './StudentUpdateWithoutUserInputSchema';
import { StudentUncheckedUpdateWithoutUserInputSchema } from './StudentUncheckedUpdateWithoutUserInputSchema';
import { StudentCreateWithoutUserInputSchema } from './StudentCreateWithoutUserInputSchema';
import { StudentUncheckedCreateWithoutUserInputSchema } from './StudentUncheckedCreateWithoutUserInputSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';

export const StudentUpsertWithoutUserInputSchema: z.ZodType<Prisma.StudentUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => StudentWhereInputSchema).optional()
}).strict();

export default StudentUpsertWithoutUserInputSchema;
