import { z } from 'zod';
import type { Prisma } from '../../client';
import { PostCreateManyInputSchema } from '../inputTypeSchemas/PostCreateManyInputSchema'

export const PostCreateManyArgsSchema: z.ZodType<Prisma.PostCreateManyArgs> = z.object({
  data: z.union([ PostCreateManyInputSchema,PostCreateManyInputSchema.array() ]),
}).strict() ;

export default PostCreateManyArgsSchema;
