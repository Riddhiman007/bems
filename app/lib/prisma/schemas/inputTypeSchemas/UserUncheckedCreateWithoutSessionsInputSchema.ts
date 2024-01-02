import type { Prisma } from '../../client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StudentUncheckedCreateNestedOneWithoutUserInputSchema } from './StudentUncheckedCreateNestedOneWithoutUserInputSchema';
import { TeacherUncheckedCreateNestedOneWithoutUserInputSchema } from './TeacherUncheckedCreateNestedOneWithoutUserInputSchema';
import { PostUncheckedCreateNestedManyWithoutAuthorInputSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInputSchema';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().optional(),
  fullname: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  image: z.string().optional().nullable(),
  username: z.string(),
  address: z.string(),
  teacherId: z.string().optional().nullable(),
  student: z.lazy(() => StudentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  teacher: z.lazy(() => TeacherUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSessionsInputSchema;
