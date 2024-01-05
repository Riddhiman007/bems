import { z } from 'zod';

export const CasteSchema = z.enum(['Gen','SC','ST','OBC','NT']);

export type CasteType = `${z.infer<typeof CasteSchema>}`

export default CasteSchema;
