import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutStudentInputSchema } from './UserCreateWithoutStudentInputSchema';
import { UserUncheckedCreateWithoutStudentInputSchema } from './UserUncheckedCreateWithoutStudentInputSchema';

export const UserCreateOrConnectWithoutStudentInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutStudentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutStudentInputSchema),z.lazy(() => UserUncheckedCreateWithoutStudentInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutStudentInputSchema;
