import type { Prisma } from '../../client';

import { z } from 'zod';
import { StudentCreateWithoutGradeInputSchema } from './StudentCreateWithoutGradeInputSchema';
import { StudentUncheckedCreateWithoutGradeInputSchema } from './StudentUncheckedCreateWithoutGradeInputSchema';
import { StudentCreateOrConnectWithoutGradeInputSchema } from './StudentCreateOrConnectWithoutGradeInputSchema';
import { StudentUpsertWithWhereUniqueWithoutGradeInputSchema } from './StudentUpsertWithWhereUniqueWithoutGradeInputSchema';
import { StudentCreateManyGradeInputEnvelopeSchema } from './StudentCreateManyGradeInputEnvelopeSchema';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateWithWhereUniqueWithoutGradeInputSchema } from './StudentUpdateWithWhereUniqueWithoutGradeInputSchema';
import { StudentUpdateManyWithWhereWithoutGradeInputSchema } from './StudentUpdateManyWithWhereWithoutGradeInputSchema';
import { StudentScalarWhereInputSchema } from './StudentScalarWhereInputSchema';

export const StudentUpdateManyWithoutGradeNestedInputSchema: z.ZodType<Prisma.StudentUpdateManyWithoutGradeNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutGradeInputSchema),z.lazy(() => StudentCreateWithoutGradeInputSchema).array(),z.lazy(() => StudentUncheckedCreateWithoutGradeInputSchema),z.lazy(() => StudentUncheckedCreateWithoutGradeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StudentCreateOrConnectWithoutGradeInputSchema),z.lazy(() => StudentCreateOrConnectWithoutGradeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StudentUpsertWithWhereUniqueWithoutGradeInputSchema),z.lazy(() => StudentUpsertWithWhereUniqueWithoutGradeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StudentCreateManyGradeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StudentWhereUniqueInputSchema),z.lazy(() => StudentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StudentUpdateWithWhereUniqueWithoutGradeInputSchema),z.lazy(() => StudentUpdateWithWhereUniqueWithoutGradeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StudentUpdateManyWithWhereWithoutGradeInputSchema),z.lazy(() => StudentUpdateManyWithWhereWithoutGradeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StudentScalarWhereInputSchema),z.lazy(() => StudentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default StudentUpdateManyWithoutGradeNestedInputSchema;
