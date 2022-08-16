import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components/macro";
import { SectionWrapper, KronaH2, SpaceP } from "../../styles/global";
import bullseye from "../../assets/icons/bullseye.png";
import bullseyewhite from "../../assets/icons/bullseye-white.png";
import { FetchSection } from "../../services/clientFunctions";
import link_white from "../../assets/icons/link_white.png";
import github_white from "../../assets/icons/github_white.png";

const query = `*[_type == "allprojects" && !(_id in path('drafts.**'))] {title, allprojects[]->}`;

const MoreProjects = ({ position }) => {
  const colorControls = useAnimation();
  const [loading, data] = FetchSection(query);
  const [open, setOpen] = useState(false);

  const sectionVariants = {
    initial: { backgroundColor: "#000000" },
    hidden: { backgroundColor: "#ffffff" },
  };

  useEffect(() => {
    if (position === "inside") {
      colorControls.start("hidden");
    } else if (position !== "inside") {
      colorControls.start("initial");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  console.log(data);

  return (
    <SectionWrapper
      initial="initial"
      variants={sectionVariants}
      animate={colorControls}
      style={{ padding: "56px 0 84px 0" }}
    >
      <HeaderWrapper whileHover={{ scale: 1.1 }} onClick={() => setOpen(!open)}>
        <KronaH2 color="white" align="center">
          {!loading && data[0].title}
        </KronaH2>
        <ArrowIcon
          src={position === "inside" ? bullseye : bullseyewhite}
          alt="down arrow"
          animate={{
            // y: [-5, 5, -5],
            scale: [1, 1.1, 1],
            transition: {
              duration: 1.5,
              type: "spring",
              repeat: Infinity,
            },
          }}
        />
      </HeaderWrapper>
      <ProjectsWrapper>
        {!loading &&
          open &&
          data[0].allprojects.map((item, index) => (
            <ProjectsRow>
              <div>
                <SpaceP color="white" key={index}>
                  {item.emoji} | {item.title}
                </SpaceP>
              </div>
              <LinkWrapper>
                <LinkButton
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open(item.live, "_blank")}
                >
                  <LinkIcon src={link_white} alt="live link" />
                </LinkButton>
                <LinkButton
                  whileHover={{ scale: 1.1 }}
                  onClick={() => window.open(item.github, "_blank")}
                >
                  <LinkIcon src={github_white} alt="github link" />
                </LinkButton>
              </LinkWrapper>
            </ProjectsRow>
          ))}
      </ProjectsWrapper>
    </SectionWrapper>
  );
};

export default MoreProjects;

const HeaderWrapper = styled(motion.button)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

const ArrowIcon = styled(motion.img)`
  height: 40px;
  width: 40px;
`;

const ProjectsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 8px 5%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const LinkIcon = styled.img`
  height: 32px;
  width: 32px;
`;

const LinkButton = styled(motion.button)`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
