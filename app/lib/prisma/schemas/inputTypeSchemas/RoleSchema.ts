import { z } from 'zod';

export const RoleSchema = z.enum(['Student','Teacher','Admin']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
