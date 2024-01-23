"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_EDITOR, createCommand } from "lexical";
import React, { useEffect } from "react";
import { $createYoutubeNode, DefaultYoutubeProps } from "../../nodes/YoutubeNode";
import { $insertNodeToNearestRoot } from "@lexical/utils";

export const INSERT_YOUTUBE_VIDEO = createCommand<DefaultYoutubeProps>();

export default function YoutubePlugin(): React.ReactNode {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(
      INSERT_YOUTUBE_VIDEO,
      ({ videoId, format }) => {
        const node = $createYoutubeNode(videoId, format);
        $insertNodeToNearestRoot(node);
        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor, INSERT_YOUTUBE_VIDEO]);
  return null;
}
