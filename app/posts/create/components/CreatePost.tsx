"use client";
import Editor from "@/components/Editor";
import { MotionButton } from "@/components/Motion";
import {
  Category,
  InternalPostFields,
  PostFieldsValidator,
  SubCategory,
  category,
  createPost,
} from "@/lib/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, CircularProgress, MenuItem, TextField, Typography } from "@mui/material";
import { EditorState, LexicalEditor, SerializedEditorState } from "lexical";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CreatePost({ session }: { session: Session | null }) {
  const router = useRouter();
  if (!session) {
    router.push("/err?code=unauthenticated");
  }
  const [isSubmitting, setIsSubmitting] = useState<boolean | string>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [editorErr, setEditorErr] = useState<{ message: string } | null>(null);
  const { control, handleSubmit } = useForm<InternalPostFields>({
    mode: "all",
    resolver: zodResolver(PostFieldsValidator),
  });
  const editorRef = useRef<SerializedEditorState>();
  type CurrentSubcatProps = {
    [key in Category]: SubCategory[];
  };
  const currentSubCategory: CurrentSubcatProps = {
    Science: ["Physics", "Biology", "Chemistry", "Zoology"],
    Maths: ["Algebra", "Geometry"],
    Computer: ["Programming", "Business"],
    "Social Science": ["Economics", "Geography", "Politics"],
    Literature: ["Grammar"],
  };
  const onSubmit: SubmitHandler<InternalPostFields> = async (data) => {
    console.log(data);
    console.log(editorRef.current);
    setIsSubmitting(true);
    if (!(editorRef.current === undefined)) {
      createPost({ content: editorRef.current, ...data })
        .then((val) => {
          setIsSubmitting("Redirecting...");
          router.push(`/posts/${val.id}`);
        })
        .catch((e) => {
          setIsSubmitting(false);
          alert(e);
        });
    } else {
      setEditorErr({ message: "Please fill the content of your post." });
    }
    // setIsSubmitting(false);
  };
  const editorOnChange = (editorState: EditorState, editor: LexicalEditor) => {
    editorRef.current = editorState.toJSON();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
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
        rules={{
          onChange(ev) {
            setSelectedCategory(ev.target.value);
          },
        }}
        name="category"
        render={({ field: { ref, ...other }, fieldState: { error } }) => (
          <TextField
            label="Category"
            placeholder="What is the category of your post?"
            variant="standard"
            select
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
            SelectProps={{
              MenuProps: {
                classes: {
                  list: "dark:bg-slate-800",
                },
              },
            }}
            inputRef={ref}
            {...other}
          >
            {category.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="subCategory"
        render={({ field: { ref, ...other }, fieldState: { error } }) => (
          <TextField
            label="Sub Category"
            placeholder="What is the category of your post?"
            variant="standard"
            select
            InputLabelProps={{
              className: "dark:disabled:text-slate-400",
            }}
            className="dark:disabled:bg-slate-950"
            disabled={!Boolean(selectedCategory)}
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
            SelectProps={{
              disabled: !Boolean(selectedCategory),
              MenuProps: {
                classes: {
                  list: "dark:bg-slate-800",
                },
              },
            }}
            inputRef={ref}
            {...other}
          >
            {selectedCategory !== null &&
              currentSubCategory[selectedCategory].map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
          </TextField>
        )}
      />

      <Editor
        onChange={editorOnChange}
        error={Boolean(editorErr)}
        helperText={
          editorErr && (
            <Typography
              variant="caption"
              color="red"
              className="text-xs text-red-600 xl:text-base"
            >
              {editorErr.message}
            </Typography>
          )
        }
      />

      <div className="flex flex-row justify-end">
        <Button
          type="submit"
          disabled={typeof isSubmitting === "string" || Boolean(isSubmitting)}
          component={MotionButton}
          whileHover={{ scale: 1.1 }}
          color="success"
          className={`${
            typeof isSubmitting === "string" || Boolean(isSubmitting)
              ? "flex flex-row justify-between gap-2"
              : undefined
          } bg-green-600 px-4 py-2 text-green-50 hover:bg-green-800 disabled:bg-black`}
        >
          {isSubmitting && (
            <CircularProgress size={20} color="success" className="text-green-50" />
          )}
          <Typography>
            {typeof isSubmitting === "string" ? isSubmitting : "Submit"}
          </Typography>
        </Button>
      </div>
    </form>
  );
}
