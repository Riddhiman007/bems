"use client";
import React, { useMemo } from "react";
import { LexicalComposer, InitialConfigType } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import ErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { theme } from "./theme";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { Box, Typography } from "@mui/material";
import { ToolbarPlugin } from "./plugins";
import { ActionsPlugin } from "./plugins";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { YoutubeNode } from "./nodes/YoutubeNode";
import YoutubePlugin from "./plugins/YoutubePlugin";

export default function Editor() {
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
      <Box className="flex flex-col ">
        <ToolbarPlugin />
        <Box>
          <RichTextPlugin
            ErrorBoundary={ErrorBoundary}
            contentEditable={
              <ContentEditable
                placeholder="Please enter content"
                className=" rounded-b-md rounded-t-none border border-solid border-slate-600 px-4 outline-none focus:border-2 focus:border-blue-400 dark:border-slate-700 dark:text-slate-50"
              />
            }
            placeholder={(isEditable) =>
              isEditable ? (
                <Typography className="relative bottom-10 left-5 inline dark:text-slate-50">
                  Please enter content
                </Typography>
              ) : null
            }
          />
        </Box>
        <ActionsPlugin />
      </Box>
      <HistoryPlugin />
      <YoutubePlugin />
    </LexicalComposer>
  );
}
