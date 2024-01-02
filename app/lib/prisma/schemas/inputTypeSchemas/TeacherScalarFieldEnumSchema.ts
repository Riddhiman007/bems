import { z } from 'zod';

export const TeacherScalarFieldEnumSchema = z.enum(['id','name','username','email','userId']);

export default TeacherScalarFieldEnumSchema;
