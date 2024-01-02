import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id','title','description','content','author_id']);

export default PostScalarFieldEnumSchema;
