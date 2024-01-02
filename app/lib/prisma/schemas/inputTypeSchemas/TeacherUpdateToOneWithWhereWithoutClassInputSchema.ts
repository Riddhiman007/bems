import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { TeacherUpdateWithoutClassInputSchema } from './TeacherUpdateWithoutClassInputSchema';
import { TeacherUncheckedUpdateWithoutClassInputSchema } from './TeacherUncheckedUpdateWithoutClassInputSchema';

export const TeacherUpdateToOneWithWhereWithoutClassInputSchema: z.ZodType<Prisma.TeacherUpdateToOneWithWhereWithoutClassInput> = z.object({
  where: z.lazy(() => TeacherWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeacherUpdateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutClassInputSchema) ]),
}).strict();

export default TeacherUpdateToOneWithWhereWithoutClassInputSchema;
