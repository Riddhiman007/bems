import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutStudentNestedInputSchema } from './UserUpdateOneRequiredWithoutStudentNestedInputSchema';

export const StudentUpdateWithoutGradeInputSchema: z.ZodType<Prisma.StudentUpdateWithoutGradeInput> = z.object({
  fullname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  father_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mother_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caste: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStudentNestedInputSchema).optional()
}).strict();

export default StudentUpdateWithoutGradeInputSchema;
