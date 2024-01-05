import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeTypeSchema } from './GradeTypeSchema';
import { StudentWhereInputSchema } from './StudentWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumCasteFilterSchema } from './EnumCasteFilterSchema';
import { CasteSchema } from './CasteSchema';
import { EnumGenderFilterSchema } from './EnumGenderFilterSchema';
import { GenderSchema } from './GenderSchema';
import { GradeRelationFilterSchema } from './GradeRelationFilterSchema';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const StudentWhereUniqueInputSchema: z.ZodType<Omit<Prisma.StudentWhereUniqueInput, "id" | "isNew">> = z.union([
  z.object({
    // omitted: id: z.string(),
    email: z.string({required_error:"Can you please enter your email address?"}),
    grade_name: z.lazy(() => GradeTypeSchema)
  }),
  z.object({
    // omitted: id: z.string(),
    email: z.string({required_error:"Can you please enter your email address?"}),
  }),
  z.object({
    // omitted: id: z.string(),
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    // omitted: id: z.string(),
  }),
  z.object({
    email: z.string({required_error:"Can you please enter your email address?"}),
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
  z.object({
    email: z.string({required_error:"Can you please enter your email address?"}),
  }),
  z.object({
    grade_name: z.lazy(() => GradeTypeSchema),
  }),
])
.and(z.object({
  // omitted: id: z.string().optional(),
  email: z.string({required_error:"Can you please enter your email address?"}).optional(),
  grade_name: z.lazy(() => GradeTypeSchema).optional(),
  AND: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudentWhereInputSchema),z.lazy(() => StudentWhereInputSchema).array() ]).optional(),
  fullname: z.union([ z.lazy(() => StringFilterSchema),z.string({required_error:"We don't know what is your name"}) ]).optional(),
  father_name: z.union([ z.lazy(() => StringFilterSchema),z.string({required_error:"Who is your father?"}) ]).optional(),
  mother_name: z.union([ z.lazy(() => StringFilterSchema),z.string({required_error:"Who is your mother?"}) ]).optional(),
  contact: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caste: z.union([ z.lazy(() => EnumCasteFilterSchema),z.lazy(() => CasteSchema) ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string({required_error:"Can you please tell us where do you live?"}) ]).optional(),
  // omitted: isNew: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  gender: z.union([ z.lazy(() => EnumGenderFilterSchema),z.lazy(() => GenderSchema) ]).optional(),
  grade: z.union([ z.lazy(() => GradeRelationFilterSchema),z.lazy(() => GradeWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default StudentWhereUniqueInputSchema;
