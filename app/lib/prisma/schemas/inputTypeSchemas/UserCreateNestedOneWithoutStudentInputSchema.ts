import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserCreateWithoutStudentInputSchema } from './UserCreateWithoutStudentInputSchema';
import { UserUncheckedCreateWithoutStudentInputSchema } from './UserUncheckedCreateWithoutStudentInputSchema';
import { UserCreateOrConnectWithoutStudentInputSchema } from './UserCreateOrConnectWithoutStudentInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutStudentInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutStudentInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutStudentInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutStudentInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutStudentInputSchema;
