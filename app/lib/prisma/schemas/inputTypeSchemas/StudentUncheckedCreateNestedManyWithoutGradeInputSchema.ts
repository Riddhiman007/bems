import type { Prisma } from '../../client';

import { z } from 'zod';
import { StudentCreateWithoutGradeInputSchema } from './StudentCreateWithoutGradeInputSchema';
import { StudentUncheckedCreateWithoutGradeInputSchema } from './StudentUncheckedCreateWithoutGradeInputSchema';
import { StudentCreateOrConnectWithoutGradeInputSchema } from './StudentCreateOrConnectWithoutGradeInputSchema';
import { StudentCreateManyGradeInputEnvelopeSchema } from './StudentCreateManyGradeInputEnvelopeSchema';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';

export const StudentUncheckedCreateNestedManyWithoutGradeInputSchema: z.ZodType<Prisma.StudentUncheckedCreateNestedManyWithoutGradeInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGradeInputSchema),z.lazy(() => StudentCreateWithoutGradeInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGradeInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGradeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGradeInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGradeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGradeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default StudentUncheckedCreateNestedManyWithoutGradeInputSchema;
