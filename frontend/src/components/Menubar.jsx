import React from "react";
import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useWindowSize } from "../helpers/hooks";

const Menubar = () => {
  const size = useWindowSize();
  console.log(size);
  return (
    <>
      <RaisedButton
        drag
        whileTap={{ scale: 1.2, cursor: "grabbing" }}
        whileDrag={{ scale: 0.8 }}
        // dragSnapToOrigin={true}
        dragConstraints={{
          left: 50,
          right: size.width - 50,
          top: 50,
          bottom: size.height - 50,
        }}
        dragElastic={0.5}
      >
        Menu
      </RaisedButton>
    </>
  );
};

export default Menubar;

const RaisedButton = styled(motion.button)`
  background-color: #ced4da;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  cursor: grab;
  font-family: "Space Mono", monospace;
  height: 60px;
  width: 60px;
  border-radius: 50%;

  :active {
    border-left: 4px solid #6c757d;
    border-top: 4px solid #6c757d;
    border-right: 4px solid #e9ecef;
    border-bottom: 4px solid #e9ecef;
  }
`;
