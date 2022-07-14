import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Component Import
import Featured from "../../components/Featured";
// Styling Imports
import styled from "styled-components/macro";
import { BungeeH2, SectionWrapper, PageWrapper } from "../../styles/global";
// Function imports
import { FetchSection } from "../../services/clientFunctions";
// Query declaration
const query = `*[_type == "featuredprojects" && !(_id in path('drafts.**'))] {title, featured[]->}`;

const FeaturedProjects = () => {
  const [loading, data] = FetchSection(query);
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  const topItem = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        y: 0,
        opacity: 1,
        transition: { duration: 0.9, delay: delay },
      };
    },
  };

  return (
    <SectionWrapper>
      <PageWrapper position="relative">
        <BungeeH2
          align="center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={topItem}
          custom={2}
          padding="40px 0 80px 0"
        >
          {!loading && data[0].title}
        </BungeeH2>
        <ProjectsWrapper>
          {!loading &&
            data[0].featured.map((item, i) => (
              <Featured project={item} key={item._id} index={i} />
            ))}
        </ProjectsWrapper>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default FeaturedProjects;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  /* margin: 40px 0 0 0; */
`;
