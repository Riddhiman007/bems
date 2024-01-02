import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { TeacherUpdateWithoutUserInputSchema } from './TeacherUpdateWithoutUserInputSchema';
import { TeacherUncheckedUpdateWithoutUserInputSchema } from './TeacherUncheckedUpdateWithoutUserInputSchema';

export const TeacherUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TeacherUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TeacherWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeacherUpdateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default TeacherUpdateToOneWithWhereWithoutUserInputSchema;
