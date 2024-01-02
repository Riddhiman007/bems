import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentCreateWithoutUserInputSchema } from './StudentCreateWithoutUserInputSchema';
import { StudentUncheckedCreateWithoutUserInputSchema } from './StudentUncheckedCreateWithoutUserInputSchema';
import { StudentCreateOrConnectWithoutUserInputSchema } from './StudentCreateOrConnectWithoutUserInputSchema';
import { StudentUpsertWithoutUserInputSchema } from './StudentUpsertWithoutUserInputSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';
import { StudentUpdateToOneWithWhereWithoutUserInputSchema } from './StudentUpdateToOneWithWhereWithoutUserInputSchema';
import { StudentUpdateWithoutUserInputSchema } from './StudentUpdateWithoutUserInputSchema';
import { StudentUncheckedUpdateWithoutUserInputSchema } from './StudentUncheckedUpdateWithoutUserInputSchema';

export const StudentUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.StudentUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => StudentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StudentUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => StudentUpdateWithoutUserInputSchema),z.lazy(() => StudentUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default StudentUpdateOneWithoutUserNestedInputSchema;
