import React, { useEffect } from "react";
// Animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Particles
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import techParticlesConfig from "../../config/techParticlesConfig";
// Component Import
import Accordion from "../../components/Accordion";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
// Styling Imports
import styled from "styled-components/macro";
import { KronaH2, PageWrapper, SectionWrapper } from "../../styles/global";
const query = `*[_type == "tech" && !(_id in path('drafts.**'))]`;

const Tech = ({ position }) => {
  const [loading, data] = FetchSection(query);
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const colorControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  useEffect(() => {
    if (position === "inside") {
      colorControls.start("hidden");
      controls.start("black");
    } else if (position !== "inside") {
      colorControls.start("initial");
      controls.start("white");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

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

  const bottomItem = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      };
    },
    white: { color: "#ffffff" },
    black: { color: "#000000" },
  };

  const topItem = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        y: 0,
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

  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  const section = {
    initial: { backgroundColor: "#000000" },
    hidden: { backgroundColor: "#ffffff" },
  };

  return (
    <>
      <SectionWrapper
        initial="initial"
        variants={section}
        animate={colorControls}
        // minheight="80vh"
        style={{ padding: "84px 0" }}
      >
        {/* {!hidden && (
          <div
            style={{
              position: "absolute",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .7) 10%, rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, .7) 90%, rgba(0, 0, 0, 1) 100%)",
              zIndex: 3,
              minHeight: "80vh",
              height: "100%",
              width: "100vw",
            }}
          />
        )} */}
        {/* <Particles
          id="techtsparticles"
          init={particlesInit}
          options={techParticlesConfig}
          width="100vw"
          height="100%"
        /> */}

        <PageWrapper
          position="relative"
          style={{
            // minHeight: "80vh",
            height: "100%",
            width: "100vw",
            zIndex: 10,
          }}
        >
          {!loading && (
            <KronaH2
              initial="hidden"
              animate={controls}
              variants={bottomItem}
              color="white"
              padding="0 0 56px 0"
            >
              {data[0].title}
            </KronaH2>
          )}
          <AccordionWrapper ref={ref}>
            {!loading &&
              data[0].stack.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  animate={controls}
                  variants={
                    i === 0
                      ? leftItem
                      : i === 1
                      ? rightItem
                      : i === 2
                      ? leftItem
                      : i === 3
                      ? rightItem
                      : i === 4
                      ? topItem
                      : null
                  }
                  custom={i + 1}
                >
                  <Accordion data={item} position={position} />
                </motion.div>
              ))}
          </AccordionWrapper>
        </PageWrapper>
      </SectionWrapper>
    </>
  );
};

export default Tech;

const AccordionWrapper = styled.div`
  display: grid;
  gap: 16px;

  /* @media (min-width: 768px) {
  } */

  /* @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 32px;
  } */
`;
