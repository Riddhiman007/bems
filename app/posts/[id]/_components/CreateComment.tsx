import Editor from "@/_components/Editor";
import { MotionButton } from "@/_components/Motion";
import { createComment } from "@/_lib/prisma";
import { Button, CircularProgress, Typography } from "@mui/material";
import { SerializedEditorState } from "lexical";
import React, { useRef, useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function CreateComment({
  postId,
  userId,
}: {
  postId: string;
  userId: string;
}) {
  const content = useRef<SerializedEditorState>();
  const [err, setErr] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async () => {
    if (content.current) {
      setIsSubmitting(true);
      await createComment(content.current, postId, userId);
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Editor
        onChange={(editorState) => {
          content.current = editorState.toJSON();
        }}
        error={Boolean(err)}
        // helperText={}
      />
      <div className="flex flex-row justify-end">
        <Button
          component={MotionButton}
          color="success"
          disabled={isSubmitting}
          type="submit"
          className={`rounded-md bg-green-700 px-4 py-2 ${
            isSubmitting ? "flex flex-row justify-between gap-2" : undefined
          } text-green-50 hover:bg-green-800 active:bg-green-900 disabled:bg-green-900`}
        >
          {isSubmitting && <CircularProgress size={20} className="text-green-50" />}
          <Typography>{isSubmitting ? "Submitting..." : "Submit"}</Typography>
        </Button>
      </div>
    </form>
  );
}
