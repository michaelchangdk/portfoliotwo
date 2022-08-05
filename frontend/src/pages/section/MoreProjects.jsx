import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { SectionWrapper, KronaH2 } from "../../styles/global";

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
      <KronaH2 color="white" align="center" padding="56px 0 0 0">
        ALL PROJECTS
      </KronaH2>
    </SectionWrapper>
  );
};

export default MoreProjects;
