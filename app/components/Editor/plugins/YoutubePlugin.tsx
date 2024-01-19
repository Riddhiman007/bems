"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_EDITOR, createCommand } from "lexical";
import React, { useEffect } from "react";
import { $createYoutubeNode, DefaultYoutubeProps } from "../nodes/YoutubeNode";

export const INSERT_YOUTUBE_VIDEO = createCommand<DefaultYoutubeProps>();

export default function YoutubePlugin(): React.ReactNode {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(
      INSERT_YOUTUBE_VIDEO,
      ({ videoId, format }) => {
        $createYoutubeNode(videoId, format);
        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [INSERT_YOUTUBE_VIDEO]);
  return null;
}
