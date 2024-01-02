import type { Prisma } from '../../client';

import { z } from 'zod';

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  author_id: z.string()
}).strict();

export default PostCreateManyInputSchema;
