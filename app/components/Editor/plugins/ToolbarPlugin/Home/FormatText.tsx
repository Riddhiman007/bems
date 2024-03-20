"use client";
import {
  FormatAlignCenter,
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  FormatUnderlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import React, { useMemo } from "react";
import { useToolbar } from "../ToolbarContext";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

interface DefaultFormattingProps {
  icon: React.ReactNode;
  handleClick: () => any;
}

interface FormattingProps extends DefaultFormattingProps {
  active: boolean;
  name: TextFormatType;
}

interface AligningProps extends DefaultFormattingProps {
  name: ElementFormatType;
}
export default function FormatText() {
  const [editor] = useLexicalComposerContext();
  const {
    isBold,
    isItalic,
    isStrikeThrough,
    isUnderlined,
    currentAlignment,
    setCurrentAlignment,
  } = useToolbar();
  const formattingOptions = useMemo<FormattingProps[]>(
    () => [
      {
        active: isBold,
        icon: <FormatBold />,
        name: "bold",
        handleClick() {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        },
      },
      {
        active: isItalic,
        icon: <FormatItalic />,
        name: "italic",
        handleClick() {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        },
      },
      {
        active: isUnderlined,
        icon: <FormatUnderlined />,
        name: "underline",
        handleClick() {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        },
      },
      {
        active: isStrikeThrough,
        icon: <FormatStrikethrough />,
        name: "strikethrough",
        handleClick() {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        },
      },
    ],
    [editor, isBold, isItalic, isUnderlined, isStrikeThrough],
  );
  const alignmentOptions = useMemo<AligningProps[]>(
    () => [
      {
        icon: <FormatAlignLeft />,
        name: "left",
        handleClick() {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
          setCurrentAlignment("left");
        },
      },
      {
        icon: <FormatAlignCenter />,
        name: "center",
        handleClick() {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
          setCurrentAlignment("center");
        },
      },
      {
        icon: <FormatAlignRight />,
        name: "right",
        handleClick() {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
          setCurrentAlignment("right");
        },
      },
      {
        icon: <FormatAlignJustify />,
        name: "justify",
        handleClick() {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
          setCurrentAlignment("justify");
        },
      },
    ],
    [editor, setCurrentAlignment],
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row ">
        {formattingOptions.map(({ active, icon, name, handleClick }) => (
          <IconButton
            size="small"
            title={name}
            key={name}
            centerRipple={false}
            onClick={handleClick}
            TouchRippleProps={{ className: "rounded-md" }}
            className={`rounded-md p-1 text-xs text-slate-900 dark:text-slate-50 ${
              active ? "bg-zinc-300 dark:bg-slate-700" : ""
            }`}
          >
            {icon}
          </IconButton>
        ))}
      </div>
      <div className="flex flex-row">
        {alignmentOptions.map(({ handleClick, icon, name }) => (
          <IconButton
            size="small"
            title={name}
            key={name}
            onClick={handleClick}
            TouchRippleProps={{ className: "rounded-md" }}
            className={`rounded-md p-1 text-xs text-slate-900 dark:text-slate-50 ${
              currentAlignment === name ? "bg-zinc-300 dark:bg-slate-700" : ""
            }`}
          >
            {icon}
          </IconButton>
        ))}
      </div>
    </div>
  );
}
