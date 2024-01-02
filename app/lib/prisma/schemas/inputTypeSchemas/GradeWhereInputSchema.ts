import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumGradeTypeFilterSchema } from './EnumGradeTypeFilterSchema';
import { GradeTypeSchema } from './GradeTypeSchema';
import { TeacherRelationFilterSchema } from './TeacherRelationFilterSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { StudentListRelationFilterSchema } from './StudentListRelationFilterSchema';

export const GradeWhereInputSchema: z.ZodType<Prisma.GradeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GradeWhereInputSchema),z.lazy(() => GradeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeWhereInputSchema),z.lazy(() => GradeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade: z.union([ z.lazy(() => EnumGradeTypeFilterSchema),z.lazy(() => GradeTypeSchema) ]).optional(),
  teacher_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  class_teacher: z.union([ z.lazy(() => TeacherRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
  students: z.lazy(() => StudentListRelationFilterSchema).optional()
}).strict();

export default GradeWhereInputSchema;
