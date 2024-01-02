import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherCreateWithoutClassInputSchema } from './TeacherCreateWithoutClassInputSchema';
import { TeacherUncheckedCreateWithoutClassInputSchema } from './TeacherUncheckedCreateWithoutClassInputSchema';
import { TeacherCreateOrConnectWithoutClassInputSchema } from './TeacherCreateOrConnectWithoutClassInputSchema';
import { TeacherWhereUniqueInputSchema } from './TeacherWhereUniqueInputSchema';

export const TeacherCreateNestedOneWithoutClassInputSchema: z.ZodType<Prisma.TeacherCreateNestedOneWithoutClassInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutClassInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutClassInputSchema).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional()
}).strict();

export default TeacherCreateNestedOneWithoutClassInputSchema;
