import type { Prisma } from '../../client';

import { z } from 'zod';
import { TeacherCreateWithoutClassInputSchema } from './TeacherCreateWithoutClassInputSchema';
import { TeacherUncheckedCreateWithoutClassInputSchema } from './TeacherUncheckedCreateWithoutClassInputSchema';
import { TeacherCreateOrConnectWithoutClassInputSchema } from './TeacherCreateOrConnectWithoutClassInputSchema';
import { TeacherUpsertWithoutClassInputSchema } from './TeacherUpsertWithoutClassInputSchema';
import { TeacherWhereUniqueInputSchema } from './TeacherWhereUniqueInputSchema';
import { TeacherUpdateToOneWithWhereWithoutClassInputSchema } from './TeacherUpdateToOneWithWhereWithoutClassInputSchema';
import { TeacherUpdateWithoutClassInputSchema } from './TeacherUpdateWithoutClassInputSchema';
import { TeacherUncheckedUpdateWithoutClassInputSchema } from './TeacherUncheckedUpdateWithoutClassInputSchema';

export const TeacherUpdateOneRequiredWithoutClassNestedInputSchema: z.ZodType<Prisma.TeacherUpdateOneRequiredWithoutClassNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutClassInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutClassInputSchema).optional(),
  upsert: z.lazy(() => TeacherUpsertWithoutClassInputSchema).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeacherUpdateToOneWithWhereWithoutClassInputSchema),z.lazy(() => TeacherUpdateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutClassInputSchema) ]).optional(),
}).strict();

export default TeacherUpdateOneRequiredWithoutClassNestedInputSchema;
