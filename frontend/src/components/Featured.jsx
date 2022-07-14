import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { urlFor } from "../client";
// Styling imports
import styled from "styled-components/macro";
import { BebasH3, BebasP } from "../styles/global";
// Function imports
import { joinString } from "../helpers/functions";

const Featured = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  const leftItem = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => {
      return {
        x: 0,
        opacity: 1,
        transition: { duration: 0.9, delay: 1 },
      };
    },
  };

  const rightItem = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => {
      return {
        x: 0,
        opacity: 1,
        transition: { duration: 0.9, delay: 1 },
      };
    },
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <ProjectWrapper
          ref={ref}
          left={!(index % 2) ? 1 : 0}
          initial="hidden"
          animate={controls}
          variants={!(index % 2) ? leftItem : rightItem}
          // whileInView={!(index % 2) ? leftItem : rightItem}
          viewport={{ once: true, amount: 0.8 }}
          custom={3}
          id={`featured_project${index}`}
        >
          {!(index % 2) && (
            <ProjectText>
              <BebasH3 align="right">{project.title}</BebasH3>
              <BebasP align="right">{joinString(project.stack)}</BebasP>
            </ProjectText>
          )}
          <ImageWrapper whileHover={{ scale: 0.95 }}>
            <ProjectImage
              src={urlFor(project.image.asset._ref)}
              whileHover={{ scale: 1.3 }}
            />
          </ImageWrapper>
          {!!(index % 2) && (
            <ProjectText>
              <BebasH3>{project.title}</BebasH3>
              <BebasP>{joinString(project.stack)}</BebasP>
            </ProjectText>
          )}
        </ProjectWrapper>
      </div>
    </>
  );
};

export default Featured;

const ProjectWrapper = styled(motion.div)`
  display: grid;
  gap: 12px;
  align-items: center;
  /* height: 170.211px; */
  /* height: "100%"; */

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.left ? "1fr 1.3fr" : "1.3fr 1fr"};
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

const ProjectText = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :after {
    /* This value is the OPPOSITE color of our background */
    color: rgb(0, 255, 255);
    mix-blend-mode: difference;
  }
`;
