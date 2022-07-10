import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { H3, P } from "../styles/global";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const contentVariants = {
    open: {
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.15, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
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
      <AccordionContent
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={contentVariants}
      >
        {items.map((item, i) => (
          <motion.div key={i} variants={itemVariants}>
            <P>{item}</P>
          </motion.div>
        ))}
      </AccordionContent>
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
