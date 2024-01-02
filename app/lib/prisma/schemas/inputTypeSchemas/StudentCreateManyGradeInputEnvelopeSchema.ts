import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentCreateManyGradeInputSchema } from './StudentCreateManyGradeInputSchema';

export const StudentCreateManyGradeInputEnvelopeSchema: z.ZodType<Prisma.StudentCreateManyGradeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StudentCreateManyGradeInputSchema),z.lazy(() => StudentCreateManyGradeInputSchema).array() ]),
}).strict();

export default StudentCreateManyGradeInputEnvelopeSchema;
