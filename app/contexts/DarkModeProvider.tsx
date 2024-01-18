"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext<{
  isDark: boolean;
  setIsDark: (isDark: boolean) => void | any;
}>({ isDark: false, setIsDark: () => {} });

/**
 *
 * @param children the children the context should be provided
 * @returns wrapped context
 */
export default function DarkModeProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const [isDark, rawSetIsDark] = useState<boolean>(false);

  /**
   * system dark mode enabled or not
   */
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDark(theme === "dark");
  }, []);

  const setIsDark = (isDark: boolean) => {
    rawSetIsDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    isDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      <script
        dangerouslySetInnerHTML={{
          __html: `const root = document.documentElement;
const theme = localStorage.getItem("theme");
if (theme === null) {
  const query = window.matchMedia("(prefers-color-scheme:dark)");
  if (query.matches) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
} else if (theme === "dark") {
  root.classList.add("dark");
} else {
  root.classList.remove("dark");
}

      `,
        }}
      ></script>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
