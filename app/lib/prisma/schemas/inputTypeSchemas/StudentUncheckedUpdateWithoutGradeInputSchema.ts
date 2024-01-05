import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CasteSchema } from './CasteSchema';
import { EnumCasteFieldUpdateOperationsInputSchema } from './EnumCasteFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';

export const StudentUncheckedUpdateWithoutGradeInputSchema: z.ZodType<Omit<Prisma.StudentUncheckedUpdateWithoutGradeInput, "isNew">> = z.object({
  fullname: z.union([ z.string({required_error:"We don't know what is your name"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  father_name: z.union([ z.string({required_error:"Who is your father?"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mother_name: z.union([ z.string({required_error:"Who is your mother?"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caste: z.union([ z.lazy(() => CasteSchema),z.lazy(() => EnumCasteFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string({required_error:"Can you please tell us where do you live?"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  // omitted: isNew: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string({required_error:"Can you please enter your email address?"}),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default StudentUncheckedUpdateWithoutGradeInputSchema;
