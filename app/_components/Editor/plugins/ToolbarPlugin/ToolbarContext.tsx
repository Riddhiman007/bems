"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_CRITICAL,
  COMMAND_PRIORITY_EDITOR,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  LexicalEditor,
  REDO_COMMAND,
  UNDO_COMMAND,
  createEditor,
} from "lexical";
import {
  Context,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ToolbarProps {
  currentAlignment: ElementFormatType;
  isBold: boolean;
  isItalic: boolean;
  isUnderlined: boolean;
  isStrikeThrough: boolean;
  isEditable: boolean;
  setCurrentAlignment: React.Dispatch<React.SetStateAction<ElementFormatType>>;
}
const ToolbarContext: Context<ToolbarProps> = createContext<ToolbarProps>({
  currentAlignment: "left",
  isBold: false,
  isEditable: true,
  isItalic: false,
  isStrikeThrough: false,
  isUnderlined: false,
  setCurrentAlignment: () => {},
});

export function useToolbar() {
  const context = useContext(ToolbarContext);
  return context;
}
export default function ToolbarProvider({ children }: { children: React.ReactNode }) {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isEditable, setIsEditable] = useState(editor.isEditable());
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [isStrikeThrough, setIsStrikeThrough] = useState(false);
  const [currentAlignment, setCurrentAlignment] = useState<ElementFormatType>("left");

  const $updateToolbar = useCallback(() => {
    const root = $getRoot();
    if (root.hasFormat("left")) setCurrentAlignment("left");
    else if (root.hasFormat("center")) setCurrentAlignment("center");
    else if (root.hasFormat("right")) setCurrentAlignment("right");
    else if (root.hasFormat("justify")) setCurrentAlignment("justify");
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderlined(selection.hasFormat("underline"));
      setIsStrikeThrough(selection.hasFormat("strikethrough"));
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => $updateToolbar());
      }),
      editor.registerCommand(
        FORMAT_ELEMENT_COMMAND,
        (payload) => {
          setCurrentAlignment(payload);
          $updateToolbar();
          return false;
        },
        COMMAND_PRIORITY_EDITOR,
      ),
    );
  }, [editor, $updateToolbar]);
  return (
    <ToolbarContext.Provider
      value={{
        currentAlignment,
        isBold,
        isEditable,
        isItalic,
        isUnderlined,
        isStrikeThrough,
        setCurrentAlignment,
      }}
    >
      {children}
    </ToolbarContext.Provider>
  );
}
