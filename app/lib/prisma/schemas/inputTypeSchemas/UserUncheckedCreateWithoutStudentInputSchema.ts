import type { Prisma } from '../../client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { TeacherUncheckedCreateNestedOneWithoutUserInputSchema } from './TeacherUncheckedCreateNestedOneWithoutUserInputSchema';
import { PostUncheckedCreateNestedManyWithoutAuthorInputSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInputSchema';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutStudentInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutStudentInput> = z.object({
  id: z.string().optional(),
  fullname: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  image: z.string().optional().nullable(),
  username: z.string(),
  address: z.string(),
  teacherId: z.string().optional().nullable(),
  teacher: z.lazy(() => TeacherUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutStudentInputSchema;
