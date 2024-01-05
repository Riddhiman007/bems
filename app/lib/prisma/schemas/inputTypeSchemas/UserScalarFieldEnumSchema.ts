import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','fullname','email','emailVerified','role','image','address','gender']);

export default UserScalarFieldEnumSchema;
