import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherUpdateWithoutClassInputSchema } from './TeacherUpdateWithoutClassInputSchema';
import { TeacherUncheckedUpdateWithoutClassInputSchema } from './TeacherUncheckedUpdateWithoutClassInputSchema';
import { TeacherCreateWithoutClassInputSchema } from './TeacherCreateWithoutClassInputSchema';
import { TeacherUncheckedCreateWithoutClassInputSchema } from './TeacherUncheckedCreateWithoutClassInputSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';

export const TeacherUpsertWithoutClassInputSchema: z.ZodType<Prisma.TeacherUpsertWithoutClassInput> = z.object({
  update: z.union([ z.lazy(() => TeacherUpdateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutClassInputSchema) ]),
  create: z.union([ z.lazy(() => TeacherCreateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutClassInputSchema) ]),
  where: z.lazy(() => TeacherWhereInputSchema).optional()
}).strict();

export default TeacherUpsertWithoutClassInputSchema;
