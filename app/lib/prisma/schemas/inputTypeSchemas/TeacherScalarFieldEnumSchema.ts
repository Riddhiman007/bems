import { z } from 'zod';

export const TeacherScalarFieldEnumSchema = z.enum(['id','name','email']);

export default TeacherScalarFieldEnumSchema;
