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
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
