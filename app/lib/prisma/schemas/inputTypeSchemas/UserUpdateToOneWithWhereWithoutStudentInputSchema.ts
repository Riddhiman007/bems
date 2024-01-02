import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutStudentInputSchema } from './UserUpdateWithoutStudentInputSchema';
import { UserUncheckedUpdateWithoutStudentInputSchema } from './UserUncheckedUpdateWithoutStudentInputSchema';

export const UserUpdateToOneWithWhereWithoutStudentInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutStudentInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutStudentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutStudentInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutStudentInputSchema;
