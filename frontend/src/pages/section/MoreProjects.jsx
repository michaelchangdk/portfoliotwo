import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components/macro";
import { SectionWrapper, KronaH2 } from "../../styles/global";
import bullseye from "../../assets/icons/bullseye.png";
import bullseyewhite from "../../assets/icons/bullseye-white.png";

const MoreProjects = ({ position }) => {
  const colorControls = useAnimation();

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

  return (
    <SectionWrapper
      initial="initial"
      variants={sectionVariants}
      animate={colorControls}
      style={{ padding: "0 0 84px 0" }}
    >
      <HeaderWrapper whileHover={{ scale: 1.1 }}>
        <KronaH2 color="white" align="center">
          ALL PROJECTS
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
    </SectionWrapper>
  );
};

export default MoreProjects;

const HeaderWrapper = styled(motion.button)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 56px 0 0 0;
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
