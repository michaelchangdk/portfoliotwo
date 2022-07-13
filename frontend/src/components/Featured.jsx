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

  return (
    <ProjectWrapper ref={ref}>
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
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: center;
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
