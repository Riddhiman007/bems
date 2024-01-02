import type { Prisma } from '../../client';

import { z } from 'zod';
import { TeacherWhereUniqueInputSchema } from './TeacherWhereUniqueInputSchema';
import { TeacherCreateWithoutUserInputSchema } from './TeacherCreateWithoutUserInputSchema';
import { TeacherUncheckedCreateWithoutUserInputSchema } from './TeacherUncheckedCreateWithoutUserInputSchema';

export const TeacherCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TeacherCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TeacherWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeacherCreateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default TeacherCreateOrConnectWithoutUserInputSchema;
