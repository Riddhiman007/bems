import { EditorThemeClasses } from "lexical";
import styles from "../styles/toolbar.module.css";
export const theme: EditorThemeClasses = {
  ltr: styles.ltr,
  rtl: styles.rtl,
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "underline line-through",
  },
  heading: {
    h1: "text-2xl font-extrabold",
    h2: "text-xl font-bold",
    h3: "text-base font-semibold",
  },
};
