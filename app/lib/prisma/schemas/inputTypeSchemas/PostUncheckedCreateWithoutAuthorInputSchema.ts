import type { Prisma } from '../../client';

import { z } from 'zod';

export const PostUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  content: z.string()
}).strict();

export default PostUncheckedCreateWithoutAuthorInputSchema;
