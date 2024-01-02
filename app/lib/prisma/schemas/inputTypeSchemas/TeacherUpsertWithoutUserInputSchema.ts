import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherUpdateWithoutUserInputSchema } from './TeacherUpdateWithoutUserInputSchema';
import { TeacherUncheckedUpdateWithoutUserInputSchema } from './TeacherUncheckedUpdateWithoutUserInputSchema';
import { TeacherCreateWithoutUserInputSchema } from './TeacherCreateWithoutUserInputSchema';
import { TeacherUncheckedCreateWithoutUserInputSchema } from './TeacherUncheckedCreateWithoutUserInputSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';

export const TeacherUpsertWithoutUserInputSchema: z.ZodType<Prisma.TeacherUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => TeacherUpdateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TeacherCreateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => TeacherWhereInputSchema).optional()
}).strict();

export default TeacherUpsertWithoutUserInputSchema;
