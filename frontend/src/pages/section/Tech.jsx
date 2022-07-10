import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Component Import
import Accordion from "../../components/Accordion";
// Styling imports
import { SectionWrapper } from "../../styles/global";

const Tech = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  const leftItem = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      };
    },
  };

  return (
    <SectionWrapper ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={leftItem}
        custom={1}
      >
        <Accordion />
      </motion.div>
    </SectionWrapper>
  );
};

export default Tech;
