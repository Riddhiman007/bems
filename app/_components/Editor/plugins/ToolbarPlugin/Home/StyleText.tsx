"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode, $createQuoteNode, HeadingTagType } from "@lexical/rich-text";

import {
  $isNodeSelection,
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { $setBlocksType } from "@lexical/selection";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AutocompleteItem } from "@nextui-org/autocomplete";
import { Autocomplete } from "@/_components/Forms";
const blockTypeToBlockName: { [k: string]: string } = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  quote: "Quote",
  paragraph: "Paragraph",
};

export default function StyleText() {
  const [editor] = useLexicalComposerContext();

  const textStyles = useMemo(() => Object.keys(blockTypeToBlockName), []);
  const [currentStyle, setCurrentStyle] = useState<string | null>(textStyles[7]);
  const handleChange = (key: string) => {
    setCurrentStyle(key);
  };

  const formatParagraph = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      // if ($isRangeSelection(selection) || $isNodeSelection(selection)) {
      $setBlocksType(selection, () => $createParagraphNode());
      // }
    });
  }, [editor]);

  const formatHeading = useCallback(
    (tag: HeadingTagType) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection) || $isNodeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(tag));
        }
      });
    },
    [editor],
  );

  const formatQuote = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection) || $isNodeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  }, [editor]);

  useEffect(() => {
    if (!(currentStyle === null)) {
      const val = blockTypeToBlockName[currentStyle];
      if (val === "Paragraph") {
        formatParagraph();
      } else if (val === "Quote") {
        formatQuote();
      } else {
        formatHeading(currentStyle as HeadingTagType);
      }
    }
  }, [currentStyle, formatParagraph, formatHeading, formatQuote]);
  return (
    <div className="flex w-40 flex-col">
      <Autocomplete
        selectedKey={currentStyle ? currentStyle : undefined}
        // @ts-ignore
        onSelectionChange={handleChange}
        variant="faded"
        classNames={{ clearButton: "border-none", selectorButton: "border-none" }}
        inputProps={{ classNames: { input: "border-none" } }}
      >
        {Object.keys(blockTypeToBlockName).map((key) => (
          <AutocompleteItem key={key} value={key}>
            {blockTypeToBlockName[key]}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
