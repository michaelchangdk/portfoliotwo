import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Component Import
import Accordion from "../../components/Accordion";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
// Styling Imports
import styled from "styled-components/macro";
import { SectionWrapper } from "../../styles/global";
const query = `*[_type == "tech" && !(_id in path('drafts.**'))]`;

const Tech = () => {
  const [loading, data] = FetchSection(query);
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

  const bottomItem = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      };
    },
  };

  const topItem = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      };
    },
  };

  const rightItem = {
    hidden: { x: 100, opacity: 0 },
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
    <SectionWrapper>
      <AccordionWrapper ref={ref}>
        {!loading &&
          data[0].stack.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={controls}
              variants={
                i === 0
                  ? leftItem
                  : i === 1
                  ? bottomItem
                  : i === 2
                  ? topItem
                  : i === 3
                  ? bottomItem
                  : i === 4
                  ? rightItem
                  : null
              }
              custom={i}
            >
              <Accordion data={item} />
            </motion.div>
          ))}
      </AccordionWrapper>
    </SectionWrapper>
  );
};

export default Tech;

const AccordionWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
