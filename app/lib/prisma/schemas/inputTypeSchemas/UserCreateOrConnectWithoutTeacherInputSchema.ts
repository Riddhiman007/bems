import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutTeacherInputSchema } from './UserCreateWithoutTeacherInputSchema';
import { UserUncheckedCreateWithoutTeacherInputSchema } from './UserUncheckedCreateWithoutTeacherInputSchema';

export const UserCreateOrConnectWithoutTeacherInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTeacherInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutTeacherInputSchema;
