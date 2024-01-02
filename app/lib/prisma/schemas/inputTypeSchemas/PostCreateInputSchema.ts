import type { Prisma } from '../../client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputSchema } from './UserCreateNestedOneWithoutPostsInputSchema';

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema)
}).strict();

export default PostCreateInputSchema;
