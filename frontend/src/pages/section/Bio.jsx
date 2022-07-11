import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
import { urlFor } from "../../client";
// Styling & Asset Imports
import styled from "styled-components/macro";
import { H2, P, PageWrapper, SectionWrapper } from "../../styles/global";

const query = `*[_type == "bio" && !(_id in path('drafts.**'))]`;

const Bio = () => {
  const { ref, inView } = useInView();
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const transformControls = useAnimation();
  const [loading, data] = FetchSection(query);

  useEffect(() => {
    if (inView) {
      leftControls.start("visible");
      rightControls.start("visible");
      transformControls.start("visible");
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

  const rightTransform = {
    hidden: { scale: 0.8, rotate: 110, borderRadius: "50%" },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        scale: 1,
        rotate: 0,
        borderRadius: "20%",
        transition: { duration: 1, delay: delay },
      };
    },
  };

  return (
    <SectionWrapper id="bio_section">
      <PageWrapper>
        <BioWrapper ref={ref}>
          {!loading && (
            <>
              <TextWrapper>
                <H2
                  initial="hidden"
                  animate={leftControls}
                  variants={leftItem}
                  custom={1}
                >
                  {data[0].title}
                </H2>
                {data[0].about.map((item, i) => (
                  <P
                    initial="hidden"
                    animate={leftControls}
                    variants={leftItem}
                    custom={i + 2}
                    key={i}
                  >
                    {item}
                  </P>
                ))}
              </TextWrapper>
              <ImageWrapper
                initial="hidden"
                animate={rightControls}
                variants={rightItem}
                custom={4}
              >
                <ProfileImage
                  src={urlFor(data[0].image.asset._ref)}
                  alt="Michael Chang"
                  initial="hidden"
                  animate={transformControls}
                  variants={rightTransform}
                  custom={4}
                />
              </ImageWrapper>
            </>
          )}
        </BioWrapper>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default Bio;

const BioWrapper = styled(motion.div)`
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 48px;
    grid-template-columns: 1fr 1fr;
  }
`;

const TextWrapper = styled(motion.div)``;

const ImageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  border-radius: 4px;
`;
