"use client";
import React, { useMemo } from "react";
import { LexicalComposer, InitialConfigType } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import ErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import YoutubePlugin from "./plugins/YoutubePlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { YoutubeNode } from "./nodes";

import { theme } from "./theme";
import { Typography } from "@mui/material";
import { ToolbarPlugin } from "./plugins";
import { ActionsPlugin } from "./plugins";
import { EditorState, LexicalEditor } from "lexical";

interface EditorProps {
  error?: boolean;
  helperText?: React.ReactNode;
  isToolbarShown?: boolean;
  isActionShown?: boolean;
  // ref: React.RefCallback<LexicalEditor | null | undefined>;
  onChange: (editorState: EditorState, editor: LexicalEditor, tags: Set<String>) => void;
}
export default function Editor({
  error,
  helperText,
  onChange,
  isActionShown,
  isToolbarShown,
}: EditorProps) {
  const initialConfig = useMemo<InitialConfigType>(
    () => ({
      namespace: "Events and post editor",
      onError(error) {
        console.log(error);
      },
      editable: true,
      theme: theme,
      nodes: [HeadingNode, QuoteNode, YoutubeNode],
    }),
    [],
  );

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="flex flex-col ">
        {typeof isToolbarShown === "undefined" || isToolbarShown ? (
          <ToolbarPlugin />
        ) : undefined}
        <div>
          <RichTextPlugin
            ErrorBoundary={ErrorBoundary}
            contentEditable={
              <ContentEditable
                placeholder="Please enter content"
                className={`rounded-b-md rounded-t-none ${
                  error ? "border-2" : "border"
                } border-solid ${
                  error ? "border-red-700" : "border-slate-600"
                } px-4 outline-none focus:border-2 ${
                  error ? "focus:border-red-700" : "focus:border-blue-400"
                } ${
                  error ? "dark:border-red-700" : "dark:border-slate-700"
                } dark:text-slate-50`}
              />
            }
            placeholder={(isEditable) =>
              isEditable ? (
                <Typography
                  className={`relative bottom-10 left-5 inline ${
                    error ? "text-red-500" : undefined
                  } ${error ? "dark:text-red-500" : "dark:text-slate-50"}`}
                >
                  Please enter content
                </Typography>
              ) : null
            }
          />
          {helperText}
        </div>
        {typeof isActionShown === "undefined" || isActionShown ? (
          <ActionsPlugin />
        ) : undefined}
      </div>
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
      {/* <EditorRefPlugin editorRef={ref} /> */}
      <YoutubePlugin />
    </LexicalComposer>
  );
}

export { default as DisplayContent } from "./DisplayContent";
