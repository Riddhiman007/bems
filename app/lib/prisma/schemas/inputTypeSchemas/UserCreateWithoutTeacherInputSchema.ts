import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StudentCreateNestedOneWithoutUserInputSchema } from './StudentCreateNestedOneWithoutUserInputSchema';
import { PostCreateNestedManyWithoutAuthorInputSchema } from './PostCreateNestedManyWithoutAuthorInputSchema';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutTeacherInputSchema: z.ZodType<Prisma.UserCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  fullname: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  image: z.string().optional().nullable(),
  address: z.string(),
  teacherId: z.string().optional().nullable(),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutTeacherInputSchema;
