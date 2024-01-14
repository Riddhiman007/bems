"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { Delete, Redo, Undo } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import {
  UNDO_COMMAND,
  REDO_COMMAND,
  $getRoot,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  CAN_REDO_COMMAND,
} from "lexical";
import React, { useEffect, useMemo, useState } from "react";

interface ActionProps {
  needsDivider?: boolean;
  isDisabled: boolean;
  name: string;
  handleClick: () => void;
  icon: React.ReactNode;
}

export default function ActionsPlugin() {
  const [editor] = useLexicalComposerContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL,
      ),
      editor.registerUpdateListener(({ prevEditorState }) => {
        setIsClear(prevEditorState.isEmpty());
        console.log(isClear);
      }),
    );
  }, [editor]);
  const actionOptions = useMemo<ActionProps[]>(
    () => [
      {
        name: "undo",
        isDisabled: !canUndo,
        icon: <Undo />,
        handleClick() {
          editor.dispatchCommand(UNDO_COMMAND, void 0);
          console.log("undo command");
        },
      },
      {
        name: "redo",
        isDisabled: !canRedo,
        icon: <Redo />,
        handleClick() {
          editor.dispatchCommand(REDO_COMMAND, void 0);
          console.log("redo command");
        },
      },
      {
        name: "delete",
        needsDivider: true,
        isDisabled: isClear,
        icon: <Delete className="disabled:text-slate-500" />,
        handleClick: () => {
          editor.update(() => {
            const root = $getRoot();
            root.clear();

            setIsClear(root.isEmpty());
            console.log(isClear);
          });
        },
      },
    ],
    [editor, canUndo, canRedo, isClear, $getRoot],
  );
  return (
    <Box className="py-4">
      <Box className="flex flex-row gap-4">
        {actionOptions.map(({ handleClick, icon, isDisabled, name, needsDivider }) => (
          <React.Fragment key={name}>
            {needsDivider && <Divider orientation="vertical" flexItem />}
            <IconButton
              className="rounded-md p-1 text-xs text-slate-900 disabled:text-slate-600 dark:text-slate-50 dark:disabled:text-slate-400"
              title={name}
              onClick={handleClick}
              disabled={isDisabled}
              classes={{ disabled: "dark:text-slate-700" }}
            >
              {icon}
            </IconButton>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
