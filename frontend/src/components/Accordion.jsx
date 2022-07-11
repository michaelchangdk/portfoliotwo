import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { H3, P } from "../styles/global";
import plus from "../assets/plus.png";

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      height: "auto",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  const iconVariants = {
    open: { rotate: [0, 360, 315], scale: 1.2 },
    closed: { rotate: [315, -45, 0], scale: 1 },
  };

  return (
    <>
      <AccordionHeader
        // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        <AccordionIcon
          src={plus}
          alt="icon"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
        />
        <H3>{data.category}</H3>
      </AccordionHeader>
      <AccordionContent
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={contentVariants}
      >
        {data.items.map((item, i) => (
          <motion.div key={i} variants={itemVariants}>
            <P size="0.875rem">
              {"· "}
              {item}
            </P>
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
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  gap: 8px;
`;

const AccordionContent = styled(motion.section)``;

const AccordionIcon = styled(motion.img)`
  width: 20px;
  height: 20px;
`;
