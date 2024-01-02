import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  author_id: z.string()
}).strict();

export default PostUncheckedCreateInputSchema;
