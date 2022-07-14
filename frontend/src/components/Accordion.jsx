import React, { useState } from "react";
import { motion } from "framer-motion";
// Styling & Asset Imports
import {
  SpaceH3,
  SpaceP,
  AccordionHeader,
  AccordionIcon,
} from "../styles/global";
import plus from "../assets/plus_white.png";

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
        <SpaceH3 color="white">{data.category}</SpaceH3>
      </AccordionHeader>
      <motion.section
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={contentVariants}
      >
        {data.items.map((item, i) => (
          <motion.div key={i} variants={itemVariants}>
            <SpaceP color="white">
              {"· "}
              {item}
            </SpaceP>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default Accordion;
