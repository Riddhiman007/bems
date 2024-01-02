import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserUpdateWithoutTeacherInputSchema } from './UserUpdateWithoutTeacherInputSchema';
import { UserUncheckedUpdateWithoutTeacherInputSchema } from './UserUncheckedUpdateWithoutTeacherInputSchema';
import { UserCreateWithoutTeacherInputSchema } from './UserCreateWithoutTeacherInputSchema';
import { UserUncheckedCreateWithoutTeacherInputSchema } from './UserUncheckedCreateWithoutTeacherInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutTeacherInputSchema: z.ZodType<Prisma.UserUpsertWithoutTeacherInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedCreateWithoutTeacherInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutTeacherInputSchema;
