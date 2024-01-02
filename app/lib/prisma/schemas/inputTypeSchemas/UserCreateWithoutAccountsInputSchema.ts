import type { Prisma } from '../../client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StudentCreateNestedOneWithoutUserInputSchema } from './StudentCreateNestedOneWithoutUserInputSchema';
import { TeacherCreateNestedOneWithoutUserInputSchema } from './TeacherCreateNestedOneWithoutUserInputSchema';
import { PostCreateNestedManyWithoutAuthorInputSchema } from './PostCreateNestedManyWithoutAuthorInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  fullname: z.string(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  image: z.string().optional().nullable(),
  username: z.string(),
  address: z.string(),
  teacherId: z.string().optional().nullable(),
  student: z.lazy(() => StudentCreateNestedOneWithoutUserInputSchema).optional(),
  teacher: z.lazy(() => TeacherCreateNestedOneWithoutUserInputSchema).optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAccountsInputSchema;
