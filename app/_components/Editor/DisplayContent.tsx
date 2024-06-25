// import { createHeadlessEditor } from "@lexical/headless";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ParagraphNode, SerializedEditorState, createEditor } from "lexical";
import { YoutubeNode } from "./nodes";
import { $generateHtmlFromNodes } from "@lexical/html";
import { Markup } from "interweave";
// import { polyfill } from "interweave-ssr";
// import { JSDOM } from "jsdom";
// global.DOMImplementation = new JSDOM();

export default function DisplayContent({
  editorState,
}: {
  editorState: SerializedEditorState;
}) {
  const headlessEditor = createEditor({
    nodes: [HeadingNode, QuoteNode, ParagraphNode, YoutubeNode],
    onError: (err) => console.log(err),
  });
  headlessEditor.setEditable(false);
  headlessEditor.setEditorState(headlessEditor.parseEditorState(editorState));
  let content = headlessEditor
    .getEditorState()
    .read(() => $generateHtmlFromNodes(headlessEditor));
  return <Markup content={content} />;
}
