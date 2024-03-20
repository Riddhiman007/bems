"use client";
import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Home from "./Home";
import ToolbarProvider from "./ToolbarContext";
import Insert from "./Insert";

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
          value={idx}
          onChange={handleTabChange}
          className="dark:text-slate-50"
          classes={{ indicator: "dark:text-slate-50" }}
        >
          <Tab
            value="Home"
            label={<Typography className="dark:text-slate-100">Home</Typography>}
          />
          <Tab
            value="Insert"
            label={<Typography className="dark:text-slate-100">Insert</Typography>}
          />
          <Tab
            value="2"
            label={<Typography className="dark:text-slate-100">Design</Typography>}
          />
        </Tabs>
        <div className="ml-2">
          <TabPanel value="Home" index={idx}>
            <Home />
          </TabPanel>
          <TabPanel value="Insert" index={idx}>
            <Insert />
          </TabPanel>
          <TabPanel value="2" index={idx}>
            <Typography>2</Typography>
          </TabPanel>
        </div>
      </div>
    </ToolbarProvider>
  );
}
