import { InferInput } from "valibot";
import { PostFieldsValidator } from "../schema";
import { SerializedEditorState } from "lexical";

export const category = [
  "Science",
  "Maths",
  "Computer",
  "Literature",
  "Social Science",
] as const;

export const subCategory = [
  "Archeaology",
  "Programming",
  "Physics",
  "Biology",
  "Chemistry",
  "Business",
  "Grammar",
  "Geography",
  "Politics",
  "Economics",
  "Zoology",
  "Algebra",
  "Geometry",
] as const;
export type Category = (typeof category)[number];
export type SubCategory = (typeof subCategory)[number];
export type InternalPostInput = InferInput<typeof PostFieldsValidator>;
export type PostInput = InternalPostInput & { content: SerializedEditorState };
