import React from "react";
import styled from "styled-components/macro";
import { BhostraH2, SectionWrapper, PageWrapper } from "../../styles/global";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  return (
    <SectionWrapper>
      <PageWrapper>
        <BhostraH2 size="5rem" align="center">
          Featured projects
        </BhostraH2>
        <ProjectWrapper>
          <ProjectImage />
          <ProjectText></ProjectText>
        </ProjectWrapper>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default FeaturedProjects;

const ProjectWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

const ProjectText = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
