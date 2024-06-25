"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { Delete, Redo, Undo } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  UNDO_COMMAND,
  REDO_COMMAND,
  $getRoot,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  CAN_REDO_COMMAND,
} from "lexical";
import { Divider } from "@nextui-org/divider";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/button";

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
      // editor.registerUpdateListener(({ editorState }) => {
      //   setIsClear(editorState.isEmpty());
      //   console.log(isClear);
      // }),
    );
  }, [editor, isClear]);
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
        icon: <Delete />,
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
    [editor, canUndo, canRedo, isClear],
  );
  return (
    <div className="py-4">
      <div className="flex flex-row gap-4">
        {actionOptions.map(({ handleClick, icon, isDisabled, name, needsDivider }) => (
          <React.Fragment key={name}>
            {needsDivider && <Divider orientation="vertical" />}
            <Button
              className="rounded-md fill-default-foreground p-1 text-xs disabled:bg-content1"
              title={name}
              onPress={handleClick}
              isIconOnly
              isDisabled={isDisabled}
            >
              {icon}
            </Button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
