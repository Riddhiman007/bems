import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PostIncludeSchema: z.ZodType<Prisma.PostInclude> = z.object({
}).strict()

export default PostIncludeSchema;
