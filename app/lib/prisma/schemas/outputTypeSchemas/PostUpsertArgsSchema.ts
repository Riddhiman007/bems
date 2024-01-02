import { z } from 'zod';
import type { Prisma } from '../../client';
import { PostIncludeSchema } from '../inputTypeSchemas/PostIncludeSchema'
import { PostWhereUniqueInputSchema } from '../inputTypeSchemas/PostWhereUniqueInputSchema'
import { PostCreateInputSchema } from '../inputTypeSchemas/PostCreateInputSchema'
import { PostUncheckedCreateInputSchema } from '../inputTypeSchemas/PostUncheckedCreateInputSchema'
import { PostUpdateInputSchema } from '../inputTypeSchemas/PostUpdateInputSchema'
import { PostUncheckedUpdateInputSchema } from '../inputTypeSchemas/PostUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  content: z.boolean().optional(),
  author_id: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z.object({
  select: PostSelectSchema.optional(),
  include: PostIncludeSchema.optional(),
  where: PostWhereUniqueInputSchema,
  create: z.union([ PostCreateInputSchema,PostUncheckedCreateInputSchema ]),
  update: z.union([ PostUpdateInputSchema,PostUncheckedUpdateInputSchema ]),
}).strict() ;

export default PostUpsertArgsSchema;
