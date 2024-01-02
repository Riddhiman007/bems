import type { Prisma } from '../../client';

import { z } from 'zod';
import { TeacherWhereUniqueInputSchema } from './TeacherWhereUniqueInputSchema';
import { TeacherCreateWithoutClassInputSchema } from './TeacherCreateWithoutClassInputSchema';
import { TeacherUncheckedCreateWithoutClassInputSchema } from './TeacherUncheckedCreateWithoutClassInputSchema';

export const TeacherCreateOrConnectWithoutClassInputSchema: z.ZodType<Prisma.TeacherCreateOrConnectWithoutClassInput> = z.object({
  where: z.lazy(() => TeacherWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeacherCreateWithoutClassInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutClassInputSchema) ]),
}).strict();

export default TeacherCreateOrConnectWithoutClassInputSchema;
