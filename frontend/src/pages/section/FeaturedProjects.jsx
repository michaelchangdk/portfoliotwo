import React from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// Component Import
import Featured from "../../components/Featured";
// Styling Imports
import styled from "styled-components/macro";
import { SectionWrapper, PageWrapper, BungeeH2 } from "../../styles/global";
// Function imports
import { FetchSection } from "../../services/clientFunctions";
// Query declaration
const query = `*[_type == "featuredprojects" && !(_id in path('drafts.**'))] {title, featured[]->}`;

const FeaturedProjects = () => {
  const [loading, data] = FetchSection(query);
  // const { ref, inView } = useInView();
  // const controls = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // });

  // const topItem = {
  //   hidden: { y: -100, opacity: 0 },
  //   visible: (i) => {
  //     const delay = i * 0.5;
  //     return {
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 0.9, delay: delay },
  //     };
  //   },
  // };

  return (
    <SectionWrapper bg="black">
      <PageWrapper position="relative">
        {/* <BungeeH2
          align="center"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={topItem}
          custom={2}
          padding="40px 0 40px 0"
          color="white"
        >
          {!loading && data[0].title}
        </BungeeH2> */}
        <ProjectsWrapper layout>
          {!loading &&
            data[0].featured.map((item, i) => (
              <Featured project={item} key={item._id} index={i} />
            ))}
        </ProjectsWrapper>
        <BungeeH2
          style={{ alignSelf: "flex-start" }}
          // align="left"
          // ref={ref}
          // initial="hidden"
          // animate={controls}
          // variants={topItem}
          custom={2}
          padding="40px 0 40px 0"
          color="white"
        >
          MORE PROJECTS
        </BungeeH2>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default FeaturedProjects;

const ProjectsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin: 20px 0 0 0;

  @media (min-width: 768px) {
    margin: 40px 0 0 0;
  }
`;
