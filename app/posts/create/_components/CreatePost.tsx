"use client";
import Editor from "@/_components/Editor";
import { MotionButton } from "@/_components/Motion";
import { UnauthenticatedError } from "@/errors";
import {
  Category,
  InternalPostFields,
  PostFieldsValidator,
  SubCategory,
  category,
  createPost,
} from "@/_lib/prisma";

import { zodResolver } from "@hookform/resolvers/zod";
import { AutocompleteItem } from "@nextui-org/autocomplete";
import { Autocomplete } from "@/_components/Forms";
import { Button } from "@nextui-org/button";
import { Input } from "@/_components/Forms";
import { EditorState, LexicalEditor, SerializedEditorState } from "lexical";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CreatePost({ session }: { session: Session }) {
  const router = useRouter();

  const [editorErr, setEditorErr] = useState<{ message: string } | null>(null);
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitSuccessful },
    watch,
  } = useForm<InternalPostFields>({
    mode: "all",
    resolver: zodResolver(PostFieldsValidator),
  });
  const currentCategory = getValues("category");
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
    if (!(editorRef.current === undefined)) {
      let res = await createPost({ content: editorRef.current, ...data });

      router.push(`/posts/${res.id}`);
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
        render={({
          field: { ref, disabled, ...other },
          fieldState: { error, invalid },
        }) => (
          <Input
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
            }}
            size="md"
            fullWidth
            variant="faded"
            labelPlacement="outside"
            isDisabled={disabled}
            isRequired
            isInvalid={invalid}
            errorMessage={error?.message}
            label="Title"
            placeholder="Please enter a suitable title of your post"
            ref={ref}
            {...other}
          />
        )}
      />
      <Controller
        control={control}
        name="desc"
        render={({
          field: { ref, disabled, ...other },
          fieldState: { error, invalid },
        }) => (
          <Input
            classNames={{
              errorMessage: "text-danger",
              input: "border-none",
              label: ["text-sm", !!error ? "text-danger-900" : ""],
              inputWrapper: "w-[-webkit-fill-available]",
            }}
            size="md"
            variant="faded"
            labelPlacement="outside"
            fullWidth
            isDisabled={disabled}
            isRequired
            isInvalid={invalid}
            errorMessage={error?.message}
            label="Description"
            placeholder="Please enter a suitable description (optional)."
            {...other}
          />
        )}
      />
      <Controller
        control={control}
        name="category"
        render={({
          field: { name, onBlur, onChange, ref, value, disabled },
          fieldState: { invalid, error },
        }) => (
          <Autocomplete
            selectedKey={value}
            onSelectionChange={onChange}
            onBlur={onBlur}
            name={name}
            isInvalid={invalid}
            errorMessage={error?.message}
            isRequired
            labelPlacement="outside"
            isDisabled={disabled}
            classNames={{ clearButton: "border-none", selectorButton: "border-none" }}
            inputProps={{
              classNames: {
                input: "border-none",
                inputWrapper: "w-[-webkit-fill-available]",
              },
            }}
            variant="faded"
            label="Category"
            placeholder="Please enter the category of post"
          >
            {category.map((cat) => (
              <AutocompleteItem key={cat} value={cat}>
                {cat}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        )}
      />
      <Controller
        control={control}
        name="subCategory"
        render={({
          field: { name, onBlur, onChange, ref, value, disabled },
          fieldState: { invalid, error },
        }) => (
          <Autocomplete
            selectedKey={value}
            onSelectionChange={onChange}
            onBlur={onBlur}
            name={name}
            isInvalid={invalid}
            errorMessage={error?.message}
            isRequired
            isDisabled={disabled}
            classNames={{ clearButton: "border-none", selectorButton: "border-none" }}
            inputProps={{
              classNames: {
                input: "border-none",
                inputWrapper: "w-[-webkit-fill-available]",
              },
            }}
            variant="faded"
            labelPlacement="outside"
            label="Sub category"
            placeholder="Please enter a detailed category of post"
            listboxProps={{
              emptyContent: "Please select a category first.",
              classNames: { list: "list-none" },
            }}
          >
            {Boolean(currentCategory)
              ? currentSubCategory[currentCategory].map((cat) => (
                  <AutocompleteItem key={cat.toString()} value={cat}>
                    {cat}
                  </AutocompleteItem>
                ))
              : []}
          </Autocomplete>
        )}
      />

      {/* <Controller
        control={control}
        name="subCategory"
        render={({
          field: { ref, disabled, ...other },
          fieldState: { error, invalid },
        }) => (
          <Select
            classNames={{
              trigger: "border-none",
            }}
            label="Sub Category"
            placeholder="What is the category of your post?"
            variant="underlined"
            isDisabled={disabled}
            errorMessage={error?.message}
            // isInvalid={invalid}
            ref={ref}
            {...other}
            fullWidth
          >
            {Boolean(currentCategory)
              ? currentSubCategory[currentCategory].map((cat) => (
                  <SelectItem key={cat.toString()} value={cat}>
                    {cat}
                  </SelectItem>
                ))
              : []}
          </Select>
        )}
      /> */}

      <Editor
        onChange={editorOnChange}
        error={Boolean(editorErr)}
        helperText={
          editorErr && (
            <p color="red" className="text-xs text-red-600 xl:text-base">
              {editorErr.message}
            </p>
          )
        }
      />

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
      <div className="flex flex-row justify-end">
        <Button
          variant="ghost"
          color="success"
          isLoading={isSubmitting || isSubmitSuccessful}
          className="bg-success-200 px-4 py-2 text-success-800"
          as={MotionButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.15 }}
        >
          {isSubmitSuccessful ? "Redirecting" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
