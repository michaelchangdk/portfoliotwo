import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import techParticlesConfig from "../../config/techParticlesConfig";
// Component Import
import Accordion from "../../components/Accordion";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
// Styling Imports
import styled from "styled-components/macro";
import { H2, PageWrapper, SectionWrapper } from "../../styles/global";
const query = `*[_type == "tech" && !(_id in path('drafts.**'))]`;

const Tech = () => {
  const [loading, data] = FetchSection(query);
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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <SectionWrapper>
        <div style={{ position: "absolute" }}>
          <Particles
            id="techtsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={techParticlesConfig}
            height="100vh"
            width="100vw"
          />
        </div>
        <PageWrapper>
          {!loading && (
            <H2
              initial="hidden"
              animate={controls}
              variants={bottomItem}
              color="white"
              padding="0 0 32px 0"
            >
              {data[0].title}
            </H2>
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
                  <Accordion data={item} />
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

  @media (min-width: 768px) {
  }

  /* @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  } */
`;
