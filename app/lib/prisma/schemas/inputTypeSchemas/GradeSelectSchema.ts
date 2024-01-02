import { z } from 'zod';
import type { Prisma } from '../../client';
import { TeacherArgsSchema } from "../outputTypeSchemas/TeacherArgsSchema"
import { StudentArgsSchema } from "../outputTypeSchemas/StudentArgsSchema"
import { GradeCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeCountOutputTypeArgsSchema"

export const GradeSelectSchema: z.ZodType<Prisma.GradeSelect> = z.object({
  id: z.boolean().optional(),
  grade: z.boolean().optional(),
  teacher_name: z.boolean().optional(),
  class_teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
  students: z.union([z.boolean(),z.lazy(() => StudentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default GradeSelectSchema;
