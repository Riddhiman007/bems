import type { Prisma } from '../../client';

import { z } from 'zod';
import { TeacherCreateWithoutUserInputSchema } from './TeacherCreateWithoutUserInputSchema';
import { TeacherUncheckedCreateWithoutUserInputSchema } from './TeacherUncheckedCreateWithoutUserInputSchema';
import { TeacherCreateOrConnectWithoutUserInputSchema } from './TeacherCreateOrConnectWithoutUserInputSchema';
import { TeacherUpsertWithoutUserInputSchema } from './TeacherUpsertWithoutUserInputSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { TeacherWhereUniqueInputSchema } from './TeacherWhereUniqueInputSchema';
import { TeacherUpdateToOneWithWhereWithoutUserInputSchema } from './TeacherUpdateToOneWithWhereWithoutUserInputSchema';
import { TeacherUpdateWithoutUserInputSchema } from './TeacherUpdateWithoutUserInputSchema';
import { TeacherUncheckedUpdateWithoutUserInputSchema } from './TeacherUncheckedUpdateWithoutUserInputSchema';

export const TeacherUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => TeacherUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeacherUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => TeacherUpdateWithoutUserInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default TeacherUncheckedUpdateOneWithoutUserNestedInputSchema;
