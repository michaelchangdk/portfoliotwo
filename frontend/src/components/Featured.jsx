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
    <ProjectWrapper
      ref={ref}
      left={!(index % 2) ? 1 : 0}
      initial="hidden"
      animate={controls}
      variants={!(index % 2) ? leftItem : rightItem}
      custom={3}
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
  );
};

export default Featured;

const ProjectWrapper = styled(motion.div)`
  display: grid;
  gap: 12px;
  align-items: center;

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
`;
