import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GenderSchema } from './GenderSchema';
import { EnumGenderFieldUpdateOperationsInputSchema } from './EnumGenderFieldUpdateOperationsInputSchema';
import { GradeUpdateOneRequiredWithoutStudentsNestedInputSchema } from './GradeUpdateOneRequiredWithoutStudentsNestedInputSchema';
import { UserUpdateOneRequiredWithoutStudentNestedInputSchema } from './UserUpdateOneRequiredWithoutStudentNestedInputSchema';

export const StudentUpdateInputSchema: z.ZodType<Omit<Prisma.StudentUpdateInput, "isNew">> = z.object({
  fullname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  father_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mother_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contact: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caste: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  // omitted: isNew: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.lazy(() => GenderSchema),z.lazy(() => EnumGenderFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.lazy(() => GradeUpdateOneRequiredWithoutStudentsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutStudentNestedInputSchema).optional()
}).strict();

export default StudentUpdateInputSchema;
