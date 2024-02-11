import React from "react";
import Context from "./contexts";
import "./globals.css";
import { Container } from "@mui/material";
import Navigation from "./components/Navigation";
import { Metadata } from "next";
import { auth } from "./lib/auth";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Braves Foundation",
  description: "Braves Foundation",
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-slate-950">
        <Script
          id="dark-mode"
          strategy="beforeInteractive"
        >{`const root = document.documentElement;
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

      `}</Script>
        <Context session={session}>
          <Navigation>
            {modal}
            {children}
          </Navigation>
        </Context>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
