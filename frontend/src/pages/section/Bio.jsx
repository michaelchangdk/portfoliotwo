import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Styling & Asset Imports
import styled from "styled-components";
import { H2, P, SectionWrapper } from "../../styles/global";
import profile from "../../assets/profile.jpeg";

const Bio = () => {
  const { ref, inView } = useInView();
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const transformControls = useAnimation();

  useEffect(() => {
    if (inView) {
      leftControls.start("visible");
      rightControls.start("visible");
      transformControls.start("visible");
    }
    // else if (!inView) {
    //   leftControls.start("hidden");
    //   rightControls.start("hidden");
    //  transformControls.start("hidden");
    // }
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
    hidden: { scale: 0.8, rotate: -90, borderRadius: "50%" },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        scale: 1,
        rotate: 0,
        borderRadius: "20%",
        transition: { duration: 1.5, delay: delay },
      };
    },
  };

  return (
    <SectionWrapper>
      <BioWrapper ref={ref}>
        <TextWrapper>
          <H2
            initial="hidden"
            animate={leftControls}
            variants={leftItem}
            custom={1}
          >
            About me
          </H2>
          <P
            initial="hidden"
            animate={leftControls}
            variants={leftItem}
            custom={2}
          >
            My name is Michael Chang, and I'm a front-end developer with a
            strong background in project management and customer service. I've
            always been interested in both technology and the arts, ever since I
            was a kid. I grew up loving science fiction novels and movies, as
            well as video games and computers. So it only seemed natural to me
            to want to combine those interests when pivoting into a new career.
          </P>
          {/* <P>
        Turns out my interest in web development began long before this career
        change, back when I was trying to customize my Myspace page and first
        Wordpress blog with in-line styling and injecting simple scripts.
      </P> */}
          <P
            initial="hidden"
            animate={leftControls}
            variants={leftItem}
            custom={3}
          >
            Fast-forward to today, and I've just completed a 24 week long
            bootcamp, where we coded a new project each week, and for my final
            project I've had the privilege of creating an e-learning platform
            for With Purpose, an organization that works towards bridging the
            gender gap in the startup ecosystem in the Nordics.
          </P>
          {/* <P>
            I've also enjoyed working on personal side-projects, like this
            portfolio, and a weather applet I made with OpenAI's API.
          </P> */}
        </TextWrapper>
        <ImageWrapper
          initial="hidden"
          animate={rightControls}
          variants={rightItem}
          custom={4}
        >
          <ProfileImage
            src={profile}
            alt="Michael Chang"
            initial="hidden"
            animate={transformControls}
            variants={rightTransform}
            custom={4}
          />
        </ImageWrapper>
      </BioWrapper>
    </SectionWrapper>
  );
};

export default Bio;

const BioWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
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
