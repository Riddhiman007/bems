import MotionDiv from "@/components/Motion/MotionDiv";
import { Modal } from "@mui/material";
import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Modal open component={MotionDiv}>
      {children}
    </Modal>
  );
};

export default Layout;
