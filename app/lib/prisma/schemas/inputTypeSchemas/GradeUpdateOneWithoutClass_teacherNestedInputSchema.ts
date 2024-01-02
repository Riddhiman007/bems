import type { Prisma } from '../../client';

import { z } from 'zod';
import { GradeCreateWithoutClass_teacherInputSchema } from './GradeCreateWithoutClass_teacherInputSchema';
import { GradeUncheckedCreateWithoutClass_teacherInputSchema } from './GradeUncheckedCreateWithoutClass_teacherInputSchema';
import { GradeCreateOrConnectWithoutClass_teacherInputSchema } from './GradeCreateOrConnectWithoutClass_teacherInputSchema';
import { GradeUpsertWithoutClass_teacherInputSchema } from './GradeUpsertWithoutClass_teacherInputSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateToOneWithWhereWithoutClass_teacherInputSchema } from './GradeUpdateToOneWithWhereWithoutClass_teacherInputSchema';
import { GradeUpdateWithoutClass_teacherInputSchema } from './GradeUpdateWithoutClass_teacherInputSchema';
import { GradeUncheckedUpdateWithoutClass_teacherInputSchema } from './GradeUncheckedUpdateWithoutClass_teacherInputSchema';

export const GradeUpdateOneWithoutClass_teacherNestedInputSchema: z.ZodType<Prisma.GradeUpdateOneWithoutClass_teacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedCreateWithoutClass_teacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeCreateOrConnectWithoutClass_teacherInputSchema).optional(),
  upsert: z.lazy(() => GradeUpsertWithoutClass_teacherInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GradeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GradeUpdateToOneWithWhereWithoutClass_teacherInputSchema),z.lazy(() => GradeUpdateWithoutClass_teacherInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutClass_teacherInputSchema) ]).optional(),
}).strict();

export default GradeUpdateOneWithoutClass_teacherNestedInputSchema;
