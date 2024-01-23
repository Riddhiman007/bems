"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode, $createQuoteNode, HeadingTagType } from "@lexical/rich-text";
import {
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  Box,
  TextField,
} from "@mui/material";
import {
  $INTERNAL_isPointSelection,
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { $setBlocksType } from "@lexical/selection";
import React, { useCallback, useEffect, useMemo, useState } from "react";

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
  const handleChange = (
    event: React.SyntheticEvent,
    value: typeof currentStyle,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<typeof currentStyle>,
  ) => {
    setCurrentStyle(value);
  };

  const formatParagraph = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection) || $INTERNAL_isPointSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  }, [editor]);

  const formatHeading = useCallback(
    (tag: HeadingTagType) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection) || $INTERNAL_isPointSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(tag));
        }
      });
    },
    [editor],
  );

  const formatQuote = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection) || $INTERNAL_isPointSelection(selection)) {
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
    <Box className="flex w-40 flex-col">
      <Autocomplete
        value={currentStyle}
        onChange={handleChange}
        classes={{
          paper: "dark:bg-slate-800",
        }}
        size="small"
        options={textStyles}
        getOptionLabel={(option) => {
          return blockTypeToBlockName[option];
        }}
        renderInput={(params) => (
          <TextField variant="standard" label="Styles" {...params} />
        )}
      />
    </Box>
  );
}
