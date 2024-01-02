import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TeacherOrderByWithRelationInputSchema } from './TeacherOrderByWithRelationInputSchema';
import { StudentOrderByRelationAggregateInputSchema } from './StudentOrderByRelationAggregateInputSchema';

export const GradeOrderByWithRelationInputSchema: z.ZodType<Prisma.GradeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  teacher_name: z.lazy(() => SortOrderSchema).optional(),
  class_teacher: z.lazy(() => TeacherOrderByWithRelationInputSchema).optional(),
  students: z.lazy(() => StudentOrderByRelationAggregateInputSchema).optional()
}).strict();

export default GradeOrderByWithRelationInputSchema;
