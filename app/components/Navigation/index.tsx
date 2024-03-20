"use client";
import { IsMobileContext } from "@/contexts/IsMobileContext";
import React, { useContext } from "react";
import NavigationMobile from "./NavigationMobile";
import NavigationDeskTop from "./NavigationDeskTop";
import { useScrollTrigger } from "@mui/material";

const Navigation = ({
  children,
  nonce,
}: {
  children: React.ReactNode;
  nonce?: string;
}) => {
  const IsMobile = useContext<boolean>(IsMobileContext);
  const triggerElevation = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <>
      {IsMobile ? (
        <NavigationMobile elevation={triggerElevation ? 4 : 0}>
          <div className="mb-40">{children}</div>
        </NavigationMobile>
      ) : (
        <>
          <NavigationDeskTop elevation={triggerElevation ? 4 : 0} nonce={nonce} />
          {children}
        </>
      )}
    </>
  );
};

export default Navigation;
