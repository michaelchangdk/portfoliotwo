import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// Styling & Asset Imports
import {
  SpaceH3,
  SpaceP,
  AccordionHeader,
  AccordionIcon,
} from "../styles/global";
import plusWhite from "../assets/icons/plus_white.png";
import plusBlack from "../assets/icons/plus_black.png";

const Accordion = ({ data, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

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

  const text = {
    initial: { color: "#ffffff" },
    visible: { color: "#000000" },
  };

  useEffect(() => {
    if (position === "inside") {
      controls.start("visible");
    } else if (position !== "inside") {
      controls.start("initial");
    }
  });

  console.log(position);

  return (
    <>
      <AccordionHeader
        // animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        <AccordionIcon
          src={position === "inside" ? plusBlack : plusWhite}
          alt="icon"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={iconVariants}
        />
        <SpaceH3 initial="initial" variants={text} animate={controls}>
          {data.category}
        </SpaceH3>
      </AccordionHeader>
      <motion.section
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={contentVariants}
      >
        {data.items.map((item, i) => (
          <motion.div key={i} variants={itemVariants}>
            <SpaceP initial="initial" variants={text} animate={controls}>
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
