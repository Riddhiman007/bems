"use client";
import React, { useMemo } from "react";
import { LexicalComposer, InitialConfigType } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import ErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { EditorThemeClasses } from "lexical";
import { theme } from "./theme";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { Box } from "@mui/material";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
export default function Editor() {
  const initialConfig = useMemo<InitialConfigType>(
    () => ({
      namespace: "Events and post editor",
      onError(error) {
        console.log(error);
      },
      editable: true,
      theme: theme,
    }),
    [],
  );
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Box className="flex flex-col ">
        <ToolbarPlugin />
        <RichTextPlugin
          ErrorBoundary={ErrorBoundary}
          contentEditable={
            <ContentEditable
              placeholder="Please enter content"
              className="rounded-b-md rounded-t-none border border-solid border-slate-600 px-4 outline-none focus:border-2 focus:border-blue-400 dark:border-slate-700"
            />
          }
          placeholder={null}
        />
      </Box>
    </LexicalComposer>
  );
}
