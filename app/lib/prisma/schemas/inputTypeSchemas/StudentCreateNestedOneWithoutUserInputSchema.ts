import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StudentCreateWithoutUserInputSchema } from './StudentCreateWithoutUserInputSchema';
import { StudentUncheckedCreateWithoutUserInputSchema } from './StudentUncheckedCreateWithoutUserInputSchema';
import { StudentCreateOrConnectWithoutUserInputSchema } from './StudentCreateOrConnectWithoutUserInputSchema';
import { StudentWhereUniqueInputSchema } from './StudentWhereUniqueInputSchema';

export const StudentCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => StudentCreateWithoutUserInputSchema),z.lazy(() => StudentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputSchema).optional()
}).strict();

export default StudentCreateNestedOneWithoutUserInputSchema;
