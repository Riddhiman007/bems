import {
  DecoratorBlockNode,
  SerializedDecoratorBlockNode,
} from "@lexical/react/LexicalDecoratorBlockNode";
import { BlockWithAlignableContents } from "@lexical/react/LexicalBlockWithAlignableContents";
import React from "react";
import {
  DOMExportOutput,
  EditorConfig,
  ElementFormatType,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  Spread,
} from "lexical";

export interface DefaultYoutubeProps {
  className: Readonly<{ base: string; focus: string }>;
  videoId: string;
  format?: ElementFormatType;
}

interface YoutubeProps extends DefaultYoutubeProps {
  nodeKey: string;
}
function YoutubeComponent({ nodeKey, className, videoId, format }: YoutubeProps) {
  return (
    <BlockWithAlignableContents nodeKey={nodeKey} className={className} format={format}>
      <iframe
        width="320"
        height="220"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        title="YouTube video"
      />
    </BlockWithAlignableContents>
  );
}

type SerializedYoutubeNode = Spread<
  {
    videoId: string;
    type: "youtube";
    version: 1;
  },
  SerializedDecoratorBlockNode
>;

export class YoutubeNode extends DecoratorBlockNode {
  __videoId: string;

  constructor(videoId: string, format?: ElementFormatType, key?: NodeKey) {
    super(format, key);
    this.__videoId = videoId;
  }

  static clone(_data: YoutubeNode): LexicalNode {
    return new YoutubeNode(_data.__videoId, _data.__format, _data.__key);
  }

  static getType(): string {
    return "youtube";
  }

  updateDOM(): false {
    return false;
  }

  getVideoId(): string {
    return this.__videoId;
  }

  getTextContent(
    _inclueInsert?: boolean | undefined,
    _includeDirectionless?: false | undefined,
  ): string {
    return `www.youtube.com/watch?v=${this.__videoId}`;
  }

  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const video = document.createElement("iframe");
    video.src = this.__videoId;
    // video.className = this.__iframeClassName;

    return { element: video };
  }

  static importJSON(_serializedNode: SerializedYoutubeNode): LexicalNode {
    const node = $createYoutubeNode(_serializedNode.videoId);
    node.setFormat(_serializedNode.format);
    return node;
  }

  exportJSON(): SerializedYoutubeNode {
    return {
      ...super.exportJSON(),
      type: "youtube",
      version: 1,
      videoId: this.__videoId,
    };
  }
  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || "",
      focus: embedBlockTheme.focus || "",
    };
    return (
      <YoutubeComponent
        className={className}
        format={this.__format}
        nodeKey={this.getKey()}
        videoId={this.__videoId}
      />
    );
  }

  isInline(): false {
    return false;
  }
}

export function $createYoutubeNode(videoId: string, format?: ElementFormatType) {
  return new YoutubeNode(videoId, format);
}

export function $isYoutubeNode(node: DecoratorBlockNode) {
  return node instanceof YoutubeNode;
}
