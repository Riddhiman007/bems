import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { TeacherRelationFilterSchema } from './TeacherRelationFilterSchema';
import { TeacherWhereInputSchema } from './TeacherWhereInputSchema';
import { StudentListRelationFilterSchema } from './StudentListRelationFilterSchema';

export const GradeWhereUniqueInputSchema: z.ZodType<Prisma.GradeWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    grade: z.lazy(() => GradeTypeSchema),
    teacher_name: z.string()
  }),
  z.object({
    id: z.string(),
    grade: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    id: z.string(),
    teacher_name: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    grade: z.lazy(() => GradeTypeSchema),
    teacher_name: z.string(),
  }),
  z.object({
    grade: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    teacher_name: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  grade: z.lazy(() => GradeTypeSchema).optional(),
  teacher_name: z.string().optional(),
  AND: z.union([ z.lazy(() => GradeWhereInputSchema),z.lazy(() => GradeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeWhereInputSchema),z.lazy(() => GradeWhereInputSchema).array() ]).optional(),
  class_teacher: z.union([ z.lazy(() => TeacherRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
  students: z.lazy(() => StudentListRelationFilterSchema).optional()
}).strict());

export default GradeWhereUniqueInputSchema;
