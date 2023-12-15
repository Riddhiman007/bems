import AnimatePresence from "@/components/Motion/AnimatePresence";
import MotionDiv from "@/components/Motion/MotionDiv";
import { Modal } from "@mui/material";
import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <AnimatePresence>
      <Modal open component={MotionDiv}>
        {children}
      </Modal>
    </AnimatePresence>
  );
};

export default Layout;
