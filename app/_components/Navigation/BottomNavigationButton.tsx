"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

const MainButton = () => {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleButton1Click = () => alert("Button 1 clicked!");
  const handleButton2Click = () => alert("Button 2 clicked!");
  const handleButton3Click = () => alert("Button 3 clicked!");
  const handleButton4Click = () => alert("Button 4 clicked!");

  return (
    <div className="relative z-50 flex h-screen items-center justify-center">
      <motion.div
        drag
        dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
        dragElastic={0.2}
        onDrag={(event, info) => {
          const button1 = document.getElementById("button1").getBoundingClientRect();
          const button2 = document.getElementById("button2").getBoundingClientRect();
          const button3 = document.getElementById("button3").getBoundingClientRect();
          const button4 = document.getElementById("button4").getBoundingClientRect();
          const draggedElement = info.point;

          if (
            draggedElement.x > button1.left &&
            draggedElement.x < button1.right &&
            draggedElement.y > button1.top &&
            draggedElement.y < button1.bottom
          ) {
            handleButton1Click();
          }
          if (
            draggedElement.x > button2.left &&
            draggedElement.x < button2.right &&
            draggedElement.y > button2.top &&
            draggedElement.y < button2.bottom
          ) {
            handleButton2Click();
          }
          if (
            draggedElement.x > button3.left &&
            draggedElement.x < button3.right &&
            draggedElement.y > button3.top &&
            draggedElement.y < button3.bottom
          ) {
            handleButton3Click();
          }
          if (
            draggedElement.x > button4.left &&
            draggedElement.x < button4.right &&
            draggedElement.y > button4.top &&
            draggedElement.y < button4.bottom
          ) {
            handleButton4Click();
          }
        }}
      >
        <Button onClick={toggleButtons} color="primary">
          Main Button
        </Button>
      </motion.div>
      {showButtons && (
        <>
          <Button
            id="button1"
            color="success"
            className="absolute"
            style={{ top: "-50px", left: "-50px" }}
          >
            Button 1
          </Button>
          <Button
            id="button2"
            color="danger"
            className="absolute"
            style={{ top: "-50px", right: "-50px" }}
          >
            Button 2
          </Button>
          <Button
            id="button3"
            color="warning"
            className="absolute"
            style={{ bottom: "-50px", left: "-50px" }}
          >
            Button 3
          </Button>
          <Button
            id="button4"
            color="secondary"
            className="absolute"
            style={{ bottom: "-50px", right: "-50px" }}
          >
            Button 4
          </Button>
        </>
      )}
    </div>
  );
};

export default MainButton;
