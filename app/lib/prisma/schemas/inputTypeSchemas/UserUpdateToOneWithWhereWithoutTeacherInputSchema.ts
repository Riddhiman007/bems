import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutTeacherInputSchema } from './UserUpdateWithoutTeacherInputSchema';
import { UserUncheckedUpdateWithoutTeacherInputSchema } from './UserUncheckedUpdateWithoutTeacherInputSchema';

export const UserUpdateToOneWithWhereWithoutTeacherInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTeacherInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTeacherInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTeacherInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutTeacherInputSchema;
