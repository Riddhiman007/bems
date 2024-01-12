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
import { Box, IconButton } from "@mui/material";
import {
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
} from "lexical";
import React, { useMemo, useState } from "react";
import { useToolbar } from "./ToolbarContext";

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
  const {
    activeEditor,
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
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        },
      },
      {
        active: isItalic,
        icon: <FormatItalic />,
        name: "italic",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        },
      },
      {
        active: isUnderlined,
        icon: <FormatUnderlined />,
        name: "underline",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        },
      },
      {
        active: isStrikeThrough,
        icon: <FormatStrikethrough />,
        name: "strikethrough",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        },
      },
    ],
    [activeEditor, isBold, isItalic, isUnderlined, isStrikeThrough],
  );
  const alignmentOptions = useMemo<AligningProps[]>(
    () => [
      {
        icon: <FormatAlignLeft />,
        name: "left",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
          setCurrentAlignment("left");
        },
      },
      {
        icon: <FormatAlignCenter />,
        name: "center",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
          setCurrentAlignment("center");
        },
      },
      {
        icon: <FormatAlignRight />,
        name: "right",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
          setCurrentAlignment("right");
        },
      },
      {
        icon: <FormatAlignJustify />,
        name: "justify",
        handleClick() {
          activeEditor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
          setCurrentAlignment("justify");
        },
      },
    ],
    [activeEditor, setCurrentAlignment],
  );

  return (
    <Box className="flex flex-col gap-4">
      <Box className="flex flex-row ">
        {formattingOptions.map(({ active, icon, name, handleClick }) => (
          <IconButton
            size="small"
            key={name}
            onClick={handleClick}
            TouchRippleProps={{ className: "rounded-md" }}
            className={`rounded-md p-1 text-xs dark:text-slate-50 ${
              active ? "bg-zinc-300 dark:bg-slate-700" : ""
            }`}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
      <Box className="flex flex-row">
        {alignmentOptions.map(({ handleClick, icon, name }) => (
          <IconButton
            size="small"
            key={name}
            onClick={handleClick}
            TouchRippleProps={{ className: "rounded-md" }}
            className={`rounded-md p-1 text-xs dark:text-slate-50 ${
              currentAlignment === name ? "bg-zinc-300 dark:bg-slate-700" : ""
            }`}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
