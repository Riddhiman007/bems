import { InferInput } from "valibot";
import { LoginValidator } from "../schema";

export type LoginInput = InferInput<typeof LoginValidator>;
