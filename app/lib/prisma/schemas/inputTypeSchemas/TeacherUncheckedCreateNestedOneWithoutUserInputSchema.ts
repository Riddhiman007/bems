import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeacherCreateWithoutUserInputSchema } from './TeacherCreateWithoutUserInputSchema';
import { TeacherUncheckedCreateWithoutUserInputSchema } from './TeacherUncheckedCreateWithoutUserInputSchema';
import { TeacherCreateOrConnectWithoutUserInputSchema } from './TeacherCreateOrConnectWithoutUserInputSchema';
import { TeacherWhereUniqueInputSchema } from './TeacherWhereUniqueInputSchema';

export const TeacherUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional()
}).strict();

export default TeacherUncheckedCreateNestedOneWithoutUserInputSchema;
