import { z } from 'zod';

export const StudentScalarFieldEnumSchema = z.enum(['id','fullname','father_name','mother_name','contact','caste','address','isNew','gender','email','grade_name']);

export default StudentScalarFieldEnumSchema;
