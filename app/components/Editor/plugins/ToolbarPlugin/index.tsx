"use client";
import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import Home from "./Home";
import ToolbarProvider from "./ToolbarContext";

export default function ToolbarPlugin() {
  const [idx, setIdx] = useState("Home");
  const handleTabChange = (ev: React.SyntheticEvent, value: string) => setIdx(value);
  return (
    <ToolbarProvider>
      <TabContext value={idx}>
        <Box>
          <TabList onChange={handleTabChange}>
            <Tab value="Home" label={<Typography>Home</Typography>} />
            <Tab value="Insert" label={<Typography>Insert</Typography>} />
            <Tab value="2" label={<Typography>Design</Typography>} />
          </TabList>
        </Box>
        <TabPanel value="Home">
          <Home />
        </TabPanel>
        <TabPanel value="Insert">Insert</TabPanel>
        <TabPanel value="2"></TabPanel>
      </TabContext>
    </ToolbarProvider>
  );
}
