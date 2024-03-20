import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-row justify-center">{children}</div>;
}
