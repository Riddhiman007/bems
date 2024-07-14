import * as v from "valibot";
import { category, subCategory } from "../types";

export const PostFieldsValidator = v.object({
  title: v.string("Please give a suitable title"),
  category: v.picklist(category, "What is the category of the post?"),
  subCategory: v.picklist(subCategory, "What type of post is this?"),
  desc: v.optional(v.string()),
});
