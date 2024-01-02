import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','fullname','email','emailVerified','role','image','username','address','teacherId']);

export default UserScalarFieldEnumSchema;
