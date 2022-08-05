import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Waypoint } from "react-waypoint";
// import { useInView } from "react-intersection-observer";
// Component Import
import Featured from "../../components/Featured";
// Styling & Asset Imports
import styled from "styled-components/macro";
import { SectionWrapper, PageWrapper, KronaH2 } from "../../styles/global";
import star from "../../assets/icons/star.png";
// Function imports
import { FetchSection } from "../../services/clientFunctions";
// Query declaration
const query = `*[_type == "featuredprojects" && !(_id in path('drafts.**'))] {title, featured[]->}`;

const FeaturedProjects = ({ position }) => {
  const [loading, data] = FetchSection(query);
  const controls = useAnimation();
  const colorControls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const sectionVariants = {
    initial: { backgroundColor: "#000000" },
    hidden: { backgroundColor: "#ffffff" },
  };

  const onEnter = () => {
    controls.start("visible");
  };

  useEffect(() => {
    if (position === "inside") {
      colorControls.start("hidden");
    } else if (position !== "inside") {
      colorControls.start("initial");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SectionWrapper
      initial="initial"
      variants={sectionVariants}
      animate={colorControls}
      style={{ padding: "84px 0 0 0" }}
    >
      <PageWrapper position="relative">
        <Waypoint onEnter={onEnter} />
        <HeaderWrapper
          initial="hidden"
          animate={controls}
          variants={topItem}
          custom={2}
        >
          <StarIcon
            src={star}
            alt="rotating star"
            animate={{ rotate: scrollPosition }}
          />
          <KronaH2 align="center" color="white">
            {!loading && data[0].title}
          </KronaH2>
        </HeaderWrapper>
        <ProjectsWrapper>
          {!loading &&
            data[0].featured.map((item, i) => (
              <Featured project={item} key={item._id} index={i} />
            ))}
          {/* <KronaH2
            style={{ alignSelf: "flex-start" }}
            // align="left"
            // ref={ref}
            // initial="hidden"
            // animate={controls}
            // variants={topItem}
            custom={2}
            padding="0 0 52px 0"
            color="white"
          >
            MORE PROJECTS
          </KronaH2> */}
        </ProjectsWrapper>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default FeaturedProjects;

const ProjectsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 28px;
  /* margin: 120px 0 0 0; */

  /* @media (min-width: 768px) {
    margin: 40px 0 0 0;
  } */
`;

const HeaderWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 0 0 24px 0;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const StarIcon = styled(motion.img)`
  height: 44px;
  width: 44px;
`;
