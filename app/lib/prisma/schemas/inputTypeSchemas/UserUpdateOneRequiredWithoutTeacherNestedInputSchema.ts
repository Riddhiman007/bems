import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserCreateWithoutTeacherInputSchema } from './UserCreateWithoutTeacherInputSchema';
import { UserUncheckedCreateWithoutTeacherInputSchema } from './UserUncheckedCreateWithoutTeacherInputSchema';
import { UserCreateOrConnectWithoutTeacherInputSchema } from './UserCreateOrConnectWithoutTeacherInputSchema';
import { UserUpsertWithoutTeacherInputSchema } from './UserUpsertWithoutTeacherInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTeacherInputSchema } from './UserUpdateToOneWithWhereWithoutTeacherInputSchema';
import { UserUpdateWithoutTeacherInputSchema } from './UserUpdateWithoutTeacherInputSchema';
import { UserUncheckedUpdateWithoutTeacherInputSchema } from './UserUncheckedUpdateWithoutTeacherInputSchema';

export const UserUpdateOneRequiredWithoutTeacherNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTeacherInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTeacherInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTeacherInputSchema),z.lazy(() => UserUpdateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeacherInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutTeacherNestedInputSchema;
