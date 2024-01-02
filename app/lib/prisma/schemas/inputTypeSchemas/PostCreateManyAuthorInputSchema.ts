import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PostCreateManyAuthorInputSchema: z.ZodType<Prisma.PostCreateManyAuthorInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  content: z.string()
}).strict();

export default PostCreateManyAuthorInputSchema;
