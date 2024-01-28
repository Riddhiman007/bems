"use client";
import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { createEditor } from "lexical";
import React from "react";

export default function HtmlPlugin({ ref }: { ref }): React.ReactNode {
  const [editor] = useLexicalComposerContext();
  return null;
}
