import { isValidEmail } from "@/_lib/prisma";
import * as v from "valibot";
export const LoginValidator = v.objectAsync({
  email: v.pipeAsync(
    v.string("Please enter your email."),
    v.email("It must be a valid email address."),
    v.checkAsync(isValidEmail),
  ),
});
