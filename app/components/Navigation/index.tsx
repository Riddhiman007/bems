"use client";
import { IsMobileContext } from "@/contexts/IsMobileContext";
import React, { useContext } from "react";
import NavigationMobile from "./NavigationMobile";
import NavigationDeskTop from "./NavigationDeskTop";
import { useScrollTrigger } from "@mui/material";

const Navigation = ({ children }: { children: React.ReactNode }) => {
  const IsMobile = useContext<boolean>(IsMobileContext);
  const triggerElevation = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <>
      {IsMobile ? (
        <NavigationMobile elevation={triggerElevation ? 4 : 0}>
          {children}
        </NavigationMobile>
      ) : (
        <>
          <NavigationDeskTop elevation={triggerElevation ? 4 : 0} />
          {children}
        </>
      )}
    </>
  );
};

export default Navigation;
