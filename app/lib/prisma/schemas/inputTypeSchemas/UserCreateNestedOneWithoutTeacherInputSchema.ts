import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTeacherInputSchema } from './UserCreateWithoutTeacherInputSchema';
import { UserUncheckedCreateWithoutTeacherInputSchema } from './UserUncheckedCreateWithoutTeacherInputSchema';
import { UserCreateOrConnectWithoutTeacherInputSchema } from './UserCreateOrConnectWithoutTeacherInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutTeacherInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeacherInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutTeacherInputSchema;
