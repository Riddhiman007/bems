import { Caste, GradeType, Gender, ExamType, ExamSubjectsList } from "@prisma/client";
import { z } from "zod";
import { SerializedEditorState } from "lexical";

export const allGrades = Object.values(GradeType);
export const allCastes = Object.values(Caste);

export const StudentFieldValidator = z.object({
  fullname: z.string({ required_error: "We don't know what is your name" }),
  father_name: z.string({ required_error: "Who is your father?" }),
  mother_name: z.string({ required_error: "Who is your mother?" }),
  caste: z.enum(["Gen", "SC", "ST", "OBC", "NT"], {
    required_error: "Please enter your caste name",
  }),
  grade: z.enum(
    ["nursery", "jr", "sr", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"],
    { required_error: "Which class do you want to study?" },
  ),
  address: z.string({ required_error: "Where do you live?" }),
  contact: z
    .string({ required_error: "How will we contact you?" })
    .length(10, { message: "Contact numbers must be at least 10 digits long." }),
  email: z
    .string({ required_error: "Please enter your email address." })
    .email({ message: "It must be at email" }),
  gender: z.enum(["Male", "Female"], {
    required_error: "Are you a male... or a female?",
  }),
  isNew: z.boolean().default(true).optional(),
});

export type StudentFields = z.infer<typeof StudentFieldValidator>;
export type StudentFieldsWithId = StudentFields & { id: string };
export type Category = "Science" | "Maths" | "Computer" | "Literature" | "Social Science";
export type SubCategory =
  | "Archeaology"
  | "Programming"
  | "Physics"
  | "Biology"
  | "Chemistry"
  | "Business"
  | "Grammar"
  | "Geography"
  | "Politics"
  | "Economics"
  | "Zoology"
  | "Geometry"
  | "Quantum"
  | "Algebra";

export const category: readonly Category[] = [
  "Science",
  "Maths",
  "Computer",
  "Literature",
  "Social Science",
];
export const subCategory: readonly SubCategory[] = [
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
];

export const PostFieldsValidator = z.object({
  title: z.string({ required_error: "Please give a suitable title" }),
  category: z.enum<Category, readonly [Category, ...Category[]]>(
    category as readonly [Category, ...Category[]],
    { required_error: "What is the category of the post?" },
  ),
  subCategory: z.enum<SubCategory, readonly [SubCategory, ...SubCategory[]]>(
    subCategory as readonly [SubCategory, ...SubCategory[]],
    {
      required_error: "What type of post is this?",
    },
  ),
  desc: z
    .string({ description: "A description would be good for posting in social media" })
    .optional(),
});

export type InternalPostFields = z.infer<typeof PostFieldsValidator>;
export interface PostFields extends InternalPostFields {
  content: SerializedEditorState;
}

export const ExamTypeList = Object.values(ExamType);

export type DefaultExamMarks = {
  exam_type: ExamType;
  primary_main_sub_marks?: number;
  primary_optional_sub_marks?: number;
  middle_main_sub_marks?: number;
  middle_optional_sub_marks?: number;
  secondary_main_sub_marks?: number;
  secondary_optional_sub_marks?: number;
  pre_primary_sub_marks?: number;
};

export const exam_defaults: DefaultExamMarks[] = [
  {
    exam_type: "FA1",
    middle_main_sub_marks: 40,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 20,
    primary_optional_sub_marks: 20,
    secondary_main_sub_marks: 60,
    secondary_optional_sub_marks: 25,
    pre_primary_sub_marks: 20,
  },
  {
    exam_type: "SA1",
    middle_main_sub_marks: 60,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 30,
    primary_optional_sub_marks: 30,
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 25,
    pre_primary_sub_marks: 30,
  },
  {
    exam_type: "FA2",
    middle_main_sub_marks: 40,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 30,
    primary_optional_sub_marks: 30,
    pre_primary_sub_marks: 20,
  },
  {
    exam_type: "SA2",
    middle_main_sub_marks: 60,
    middle_optional_sub_marks: 40,
    primary_main_sub_marks: 40,
    primary_optional_sub_marks: 40,
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 50,
    pre_primary_sub_marks: 20,
  },
  {
    exam_type: "Prelim1",
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 25,
  },
  {
    exam_type: "Prelim2",
    secondary_main_sub_marks: 80,
    secondary_optional_sub_marks: 25,
  },
];

export const prepGrades: GradeType[] = ["nursery", "jr", "sr"];
export const primaryGrades: GradeType[] = ["I", "II", "III", "IV"];
export const middleGrades: GradeType[] = ["V", "VI", "VII"];
export const secondaryGrades: GradeType[] = ["VIII", "IX", "X"];
export type GradeClass = "prep" | "primary" | "middle" | "secondary";

export const MainSubjects: ExamSubjectsList[] = [
  "English",
  "Hindi",
  "Marathi",
  "Mathematics",
  "SST",
  "Science",
];

export const allExamSubjects = Object.values(ExamSubjectsList);
