import { z } from 'zod';
import type { Prisma } from '../../client';

export const PostIncludeSchema: z.ZodType<Prisma.PostInclude> = z.object({
}).strict()

export default PostIncludeSchema;
