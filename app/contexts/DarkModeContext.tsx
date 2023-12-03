"use client";
import React, { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext<{
  isDark: boolean | null;
  setIsDark: React.Dispatch<React.SetStateAction<boolean | null>> | null;
}>({ isDark: false, setIsDark: null });

/// Default is dark mode
export default function DarkModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // it may not be none, but for type-safety
  const [isDark, setIsDark] = useState<boolean | null>(true);

  // useEffect(() => {
  //   setIsDark(window.matchMedia("(prefers-color-scheme:dark)").matches);
  // }, []);

  useEffect(() => {
    document.querySelector("html").classList.add(isDark ? "dark" : "");
  }, [isDark]);
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext };
