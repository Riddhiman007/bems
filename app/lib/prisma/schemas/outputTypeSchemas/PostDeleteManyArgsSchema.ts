import { z } from 'zod';
import type { Prisma } from '../../client';
import { PostWhereInputSchema } from '../inputTypeSchemas/PostWhereInputSchema'

export const PostDeleteManyArgsSchema: z.ZodType<Prisma.PostDeleteManyArgs> = z.object({
  where: PostWhereInputSchema.optional(),
}).strict() ;

export default PostDeleteManyArgsSchema;
