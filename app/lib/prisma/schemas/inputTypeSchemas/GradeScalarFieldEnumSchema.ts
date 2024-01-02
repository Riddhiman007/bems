import { z } from 'zod';

export const GradeScalarFieldEnumSchema = z.enum(['id','grade','teacher_name']);

export default GradeScalarFieldEnumSchema;
