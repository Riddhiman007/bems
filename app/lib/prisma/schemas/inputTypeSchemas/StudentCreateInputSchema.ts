import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CasteSchema } from './CasteSchema';
import { GenderSchema } from './GenderSchema';
import { GradeCreateNestedOneWithoutStudentsInputSchema } from './GradeCreateNestedOneWithoutStudentsInputSchema';
import { UserCreateNestedOneWithoutStudentInputSchema } from './UserCreateNestedOneWithoutStudentInputSchema';

export const StudentCreateInputSchema: z.ZodType<Omit<Prisma.StudentCreateInput, "id" | "isNew">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string({required_error:"We don't know what is your name"}),
  father_name: z.string({required_error:"Who is your father?"}),
  mother_name: z.string({required_error:"Who is your mother?"}),
  contact: z.string(),
  caste: z.lazy(() => CasteSchema).optional(),
  address: z.string({required_error:"Can you please tell us where do you live?"}),
  // omitted: isNew: z.boolean(),
  gender: z.lazy(() => GenderSchema).optional(),
  grade: z.lazy(() => GradeCreateNestedOneWithoutStudentsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutStudentInputSchema)
}).strict();

export default StudentCreateInputSchema;
