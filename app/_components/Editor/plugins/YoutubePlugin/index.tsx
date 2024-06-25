"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COMMAND_PRIORITY_EDITOR, ElementFormatType, createCommand } from "lexical";
import React, { useEffect } from "react";
import { $createYoutubeNode, DefaultYoutubeProps } from "../../nodes/YoutubeNode";
import { $insertNodeToNearestRoot } from "@lexical/utils";

interface YoutubeProps {
  className: Readonly<{ base: string; focus: string }>;
  ytLink: string;
  format?: ElementFormatType;
}
export const INSERT_YOUTUBE_VIDEO = createCommand<YoutubeProps>();

export default function YoutubePlugin(): React.ReactNode {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerCommand(
      INSERT_YOUTUBE_VIDEO,
      ({ ytLink, format }) => {
        const regex =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = ytLink.match(regex);
        if (match && match[7].length === 11) {
          let videoId = match[7];
          const node = $createYoutubeNode(videoId, format);
          $insertNodeToNearestRoot(node);
          return true;
        }
        return false;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [editor]);
  return null;
}
