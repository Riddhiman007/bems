import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutStudentInputSchema } from './UserUpdateWithoutStudentInputSchema';
import { UserUncheckedUpdateWithoutStudentInputSchema } from './UserUncheckedUpdateWithoutStudentInputSchema';
import { UserCreateWithoutStudentInputSchema } from './UserCreateWithoutStudentInputSchema';
import { UserUncheckedCreateWithoutStudentInputSchema } from './UserUncheckedCreateWithoutStudentInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutStudentInputSchema: z.ZodType<Prisma.UserUpsertWithoutStudentInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutStudentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudentInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutStudentInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudentInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutStudentInputSchema;
