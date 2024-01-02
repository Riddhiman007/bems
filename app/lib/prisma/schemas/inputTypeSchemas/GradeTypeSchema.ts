import { z } from 'zod';

export const GradeTypeSchema = z.enum(['nursery','jr','sr','I','II','III','IV','V','VI','VII','VIII','IX','X']);

export type GradeTypeType = `${z.infer<typeof GradeTypeSchema>}`

export default GradeTypeSchema;
