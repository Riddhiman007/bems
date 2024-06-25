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
import {
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import React, { useMemo } from "react";
import { useToolbar } from "../ToolbarContext";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Button } from "@nextui-org/button";
import { useGlow } from "@/_components/ui";

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
      <div className="flex flex-row gap-0.5">
        {formattingOptions.map(({ active, icon, name, handleClick }) => (
          <Button
            isIconOnly
            size="sm"
            title={name}
            key={name}
            onPress={handleClick}
            className={`border-none fill-default-foreground p-1 text-xs hover:bg-default-300 ${
              active ? "bg-default-200" : "bg-content1"
            }`}
          >
            {icon}
          </Button>
        ))}
      </div>
      <div className="flex flex-row gap-0.5">
        {alignmentOptions.map(({ handleClick, icon, name }) => (
          <Button
            isIconOnly
            size="sm"
            title={name}
            key={name}
            onPress={handleClick}
            className={`border-none fill-default-foreground p-1 text-xs hover:bg-default-300 ${
              currentAlignment === name ? "bg-default-200" : "bg-content1"
            }`}
          >
            {icon}
          </Button>
        ))}
      </div>
    </div>
  );
}
