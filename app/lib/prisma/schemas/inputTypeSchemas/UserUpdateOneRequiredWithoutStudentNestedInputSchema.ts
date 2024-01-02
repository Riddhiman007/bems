import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserCreateWithoutStudentInputSchema } from './UserCreateWithoutStudentInputSchema';
import { UserUncheckedCreateWithoutStudentInputSchema } from './UserUncheckedCreateWithoutStudentInputSchema';
import { UserCreateOrConnectWithoutStudentInputSchema } from './UserCreateOrConnectWithoutStudentInputSchema';
import { UserUpsertWithoutStudentInputSchema } from './UserUpsertWithoutStudentInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutStudentInputSchema } from './UserUpdateToOneWithWhereWithoutStudentInputSchema';
import { UserUpdateWithoutStudentInputSchema } from './UserUpdateWithoutStudentInputSchema';
import { UserUncheckedUpdateWithoutStudentInputSchema } from './UserUncheckedUpdateWithoutStudentInputSchema';

export const UserUpdateOneRequiredWithoutStudentNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStudentNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStudentInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStudentInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutStudentInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutStudentInputSchema),z.lazy(() => UserUpdateWithoutStudentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudentInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutStudentNestedInputSchema;
