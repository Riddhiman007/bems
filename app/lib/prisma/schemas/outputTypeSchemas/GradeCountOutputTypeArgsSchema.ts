import { z } from 'zod';
import type { Prisma } from '../../client';
import { GradeCountOutputTypeSelectSchema } from './GradeCountOutputTypeSelectSchema';

export const GradeCountOutputTypeArgsSchema: z.ZodType<Prisma.GradeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GradeCountOutputTypeSelectSchema).nullish(),
}).strict();

export default GradeCountOutputTypeSelectSchema;
