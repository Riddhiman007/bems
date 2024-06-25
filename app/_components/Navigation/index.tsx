"use client";

import React from "react";
import NavigationMobile from "./NavigationMobile";
import NavigationDeskTop from "./NavigationDeskTop";
import { useIsMobile } from "@nextui-org/use-is-mobile";

const Navigation = ({
  children,
  nonce,
}: {
  children: React.ReactNode;
  nonce?: string;
}) => {
  const IsMobile = useIsMobile();

  return (
    <>
      {IsMobile ? (
        <NavigationMobile>
          <div className="mb-40">{children}</div>
        </NavigationMobile>
      ) : (
        <>
          <NavigationDeskTop nonce={nonce} />
          {children}
        </>
      )}
    </>
  );
};

export default Navigation;
