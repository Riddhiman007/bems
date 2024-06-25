"use client";
import React, { useState } from "react";
import Home from "./Home";
import ToolbarProvider from "./ToolbarContext";
import Insert from "./Insert";
import { Tabs, Tab } from "@nextui-org/tabs";
interface TabPanelProps<T> {
  children: React.ReactNode;
  value: T;
  index: T;
}
function TabPanel<T>({ children, value, index }: TabPanelProps<T>) {
  return <div hidden={value !== index}>{children}</div>;
}

export default function ToolbarPlugin() {
  const [idx, setIdx] = useState("Home");
  const handleTabChange = (ev: React.SyntheticEvent, value: string) => setIdx(value);
  return (
    <ToolbarProvider>
      <div className="mb-4 flex flex-col gap-4">
        <Tabs
        // value={idx}
        // onChange={handleTabChange}
        >
          <Tab value="Home" title="Home">
            <Home />
          </Tab>
          <Tab value="Insert" title="Insert">
            <Insert />
          </Tab>
          <Tab value="2" title="Design"></Tab>
        </Tabs>
      </div>
    </ToolbarProvider>
  );
}
