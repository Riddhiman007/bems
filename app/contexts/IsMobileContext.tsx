/**
 * This file contains the context manager whether the window is mobile or not
 */

"use client";
import { useMediaQuery } from "@mui/material";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export const IsMobileContext = createContext<boolean>(true);
export default function IsMobileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <IsMobileContext.Provider value={isMobile}>
      {children}
    </IsMobileContext.Provider>
  );
}
