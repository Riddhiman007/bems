import React from "react";
import Context from "./contexts";
import "./globals.css";
import { Container } from "@mui/material";
import Navigation from "./components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Braves Foundation",
  description: "Braves Foundation",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-slate-950">
        <Context>
          <Navigation>
            {modal}
            {children}
          </Navigation>
        </Context>
      </body>
    </html>
  );
}
