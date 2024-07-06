import React from "react";
import Context from "./_contexts";
import "./globals.css";
import Navigation from "./_components/Navigation";
import { Metadata } from "next";
import { auth } from "./_lib/auth";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { headers } from "next/headers";
export const metadata: Metadata = {
  title: "Braves Foundation",
  description: "Braves Foundation",
};
interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

// export const experimental_ppr = true;
// export const runtime = "nodejs";

export default async function RootLayout({ children, modal }: Props) {
  const nonce = headers().get("x-nonce");
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body nonce={nonce ? nonce : undefined} className="m-0">
        <Context session={session} nonce={nonce ? nonce : undefined}>
          <Navigation nonce={nonce ? nonce : undefined}>
            {children}
            {modal}
          </Navigation>
        </Context>
        <Script
          nonce={nonce ? nonce : undefined}
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
