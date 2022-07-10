import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components/macro";
import { H3, P } from "../styles/global";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const contentVariants = {
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.5, staggerDirection: -1 } },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <>
      <AccordionHeader
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <H3>TECH</H3>
      </AccordionHeader>
      <AnimatePresence>
        <AccordionContent
          initial="closed"
          animate="open"
          exit="closed"
          variants={contentVariants}
        >
          {isOpen &&
            items.map((item, i) => <P variants={itemVariants}>{item}</P>)}
        </AccordionContent>
      </AnimatePresence>
    </>
  );
};

export default Accordion;

const AccordionHeader = styled(motion.header)`
  /* width: 300px;
  height: 80px; */
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const AccordionContent = styled(motion.section)``;
