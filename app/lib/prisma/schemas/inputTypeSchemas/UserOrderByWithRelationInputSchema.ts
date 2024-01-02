import type { Prisma } from '../../client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { StudentOrderByWithRelationInputSchema } from './StudentOrderByWithRelationInputSchema';
import { TeacherOrderByWithRelationInputSchema } from './TeacherOrderByWithRelationInputSchema';
import { PostOrderByRelationAggregateInputSchema } from './PostOrderByRelationAggregateInputSchema';
import { AccountOrderByRelationAggregateInputSchema } from './AccountOrderByRelationAggregateInputSchema';
import { SessionOrderByRelationAggregateInputSchema } from './SessionOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fullname: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  student: z.lazy(() => StudentOrderByWithRelationInputSchema).optional(),
  teacher: z.lazy(() => TeacherOrderByWithRelationInputSchema).optional(),
  posts: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
