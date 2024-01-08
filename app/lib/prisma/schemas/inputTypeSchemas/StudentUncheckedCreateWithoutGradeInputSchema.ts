import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CasteSchema } from './CasteSchema';
import { GenderSchema } from './GenderSchema';

export const StudentUncheckedCreateWithoutGradeInputSchema: z.ZodType<Omit<Prisma.StudentUncheckedCreateWithoutGradeInput, "id" | "isNew">> = z.object({
  // omitted: id: z.string().optional(),
  fullname: z.string({required_error:"We don't know what is your name"}),
  father_name: z.string({required_error:"Who is your father?"}),
  mother_name: z.string({required_error:"Who is your mother?"}),
  contact: z.string({required_error:"Please enter your contact number."}).length(10,{message:"Contact numbers must be 10 digits long."}),
  caste: z.lazy(() => CasteSchema).optional(),
  address: z.string({required_error:"Can you please tell us where do you live?"}),
  // omitted: isNew: z.boolean(),
  gender: z.lazy(() => GenderSchema).optional(),
  email: z.string({required_error:"Can you please enter your email address?"})
}).strict();

export default StudentUncheckedCreateWithoutGradeInputSchema;
