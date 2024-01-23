"use client";
import Editor from "@/components/Editor";
import { MotionButton } from "@/components/Motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { EditorState } from "lexical";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type Category = "science" | "maths" | "computer" | "literature" | "history";
type SubCategory =
  | "archeaology"
  | "programming"
  | "physics"
  | "biology"
  | "chemistry"
  | "business"
  | "grammar";

const category: readonly [string, ...string[]] = [
  "science",
  "maths",
  "computer",
  "literature",
  "history",
];
const subCategory: readonly [string, ...string[]] = [
  "archaeology",
  "programming",
  "physics",
  "biology",
  "chemistry",
  "business",
  "grammar",
];

const PostFieldsValidator = z.object({
  title: z.string({ required_error: "Please give a suitable title" }),
  category: z.enum(category, { required_error: "What is the category of the post?" }),
  subCategory: z.enum(subCategory, { required_error: "What type of post is this?" }),
  desc: z
    .string({ description: "A description would be good for posting in social media" })
    .optional(),
  content: z.object({}),
});

type PostFields = z.infer<typeof PostFieldsValidator>;
export default function CreatePost() {
  const { control, handleSubmit, watch } = useForm<PostFields>({
    mode: "all",
    resolver: zodResolver(PostFieldsValidator),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 "
    >
      <Controller
        control={control}
        name="title"
        render={({ field: { ref, ...other }, fieldState: { error } }) => (
          <TextField
            variant="standard"
            error={Boolean(error)}
            helperText={
              error && (
                <Typography
                  variant="caption"
                  color="red"
                  className="text-xs text-red-600 xl:text-base"
                >
                  {error.message}
                </Typography>
              )
            }
            className=""
            label="Title"
            placeholder="Please enter a suitable title of your post"
            inputRef={ref}
            {...other}
          />
        )}
      />
      <Controller
        control={control}
        name="desc"
        render={({ field: { ref, ...other }, fieldState: { error } }) => (
          <TextField
            variant="standard"
            label="Description"
            placeholder="Please enter a suitable description (optional)."
            error={Boolean(error)}
            helperText={
              error && (
                <Typography
                  variant="caption"
                  color="red"
                  className="text-xs text-red-600 xl:text-base"
                >
                  {error.message}
                </Typography>
              )
            }
            inputRef={ref}
            {...other}
          />
        )}
      />

      <Controller
        control={control}
        name="content"
        render={({ field: { ref, onChange }, fieldState: { error } }) => (
          <Editor ref={ref} onChange={onChange} error={Boolean(error)} />
        )}
        rules={{
          required: true,
          onChange(event) {
            let t = event.target.value as EditorState;
            console.log(t);
          },
        }}
      />

      <Box className="flex flex-row justify-end">
        <Button
          type="submit"
          component={MotionButton}
          whileHover={{ scale: 1.1 }}
          color="success"
          className="bg-green-700 px-4 py-2 text-green-50 hover:bg-green-800"
        >
          Submit
        </Button>
      </Box>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </Box>
  );
}
