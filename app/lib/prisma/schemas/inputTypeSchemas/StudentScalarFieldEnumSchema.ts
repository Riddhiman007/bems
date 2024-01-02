import { z } from 'zod';

export const StudentScalarFieldEnumSchema = z.enum(['id','fullname','username','father_name','mother_name','contact','caste','address','gender','email','grade_name','userId']);

export default StudentScalarFieldEnumSchema;
