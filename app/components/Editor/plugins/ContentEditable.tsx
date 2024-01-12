import { TextField } from "@mui/material";
import React, { useLayoutEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export default function ContentEditable() {
  const [editor] = useLexicalComposerContext();
  const [isEditable, setEditable] = React.useState(false);
  const ref = React.useCallback(
    (rootElement: HTMLElement | null) => {
      editor.setRootElement(rootElement);
    },
    [editor],
  );
  useLayoutEffect(() => {
    setEditable(editor.isEditable());
    return editor.registerEditableListener((currentIsEditable) => {
      setEditable(currentIsEditable);
    });
  }, [editor]);
  return (
    <TextField
      multiline
      placeholder="Please enter content"
      variant="outlined"
      className="w-full"
      InputProps={{ className: "rounded-t-none" }}
    />
  );
}
