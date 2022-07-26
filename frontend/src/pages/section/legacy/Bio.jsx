import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Function Imports
import { FetchSection } from "../../../services/clientFunctions";
import { urlFor } from "../../../client";
// Styling & Asset Imports
import styled from "styled-components/macro";
import {
  BungeeH2,
  SpaceP,
  PageWrapper,
  SectionWrapper,
  BioWrapper,
  ImageWrapper,
  ProfileImage,
  IconButton,
} from "../../../styles/global";
import background from "../../assets/images/biobackground2.jpg";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";

const query = `*[_type == "bio" && !(_id in path('drafts.**'))]`;

const Bio = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const [loading, data] = FetchSection(query);

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        opacity: 1,
        transition: { duration: 1, delay: delay },
      };
    },
  };

  return (
    <SectionWrapper id="bio_section">
      <ParallaxWrap>
        <ParallaxBackground></ParallaxBackground>
      </ParallaxWrap>
      <PageWrapper position="relative">
        <BioWrapper
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          custom={1}
        >
          {!loading && (
            <>
              <div>
                <BungeeH2
                  initial="hidden"
                  animate={controls}
                  variants={leftItem}
                  custom={2}
                >
                  {data[0].title}
                </BungeeH2>
                {data[0].about.map((item, i) => (
                  <SpaceP
                    initial="hidden"
                    animate={controls}
                    variants={leftItem}
                    custom={i + 4 + i + i}
                    key={i}
                    size="16px"
                    weight="500"
                  >
                    {item}
                  </SpaceP>
                ))}
              </div>
              <ImageWrapper>
                <IconsWrapper>
                  <IconButton
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial="hidden"
                    variants={fadeIn}
                    animate={controls}
                    custom={10}
                  >
                    <SocialsImage
                      src={github}
                      alt="github"
                      onClick={() =>
                        window.open(
                          "https://github.com/michaelchangdk",
                          "_blank"
                        )
                      }
                    />
                  </IconButton>
                  <IconButton
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial="hidden"
                    variants={fadeIn}
                    animate={controls}
                    custom={11}
                  >
                    <SocialsImage
                      src={email}
                      alt="email"
                      onClick={() =>
                        window.open(
                          "mailto:michaelchangdk@icloud.com?subject=Hello!"
                        )
                      }
                    />
                  </IconButton>
                  <IconButton
                    whileHover={{ scale: 1.1, y: -5 }}
                    initial="hidden"
                    variants={fadeIn}
                    animate={controls}
                    custom={12}
                  >
                    <SocialsImage
                      src={linkedin}
                      alt="linkedin"
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/michaelchangdk/",
                          "_blank"
                        )
                      }
                    />
                  </IconButton>
                </IconsWrapper>
                <ProfileImage
                  src={urlFor(data[0].image.asset._ref)}
                  alt="Michael Chang"
                  initial="hidden"
                  animate={controls}
                  variants={fadeIn}
                  custom={9}
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

const IconsWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0 28px 0;
  gap: 12px;

  @media (min-width: 500px) {
    margin-left: 10%;
  }

  @media (min-width: 768px) {
    margin: 0;
    width: 100%;
    padding: 0;
    align-items: center;
    justify-content: space-around;
  }
`;

const SocialsImage = styled.img`
  width: 44px;
  height: 44px;
`;

const ParallaxWrap = styled.div`
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ParallaxBackground = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url(${background});
  transform: translateZ(0);
  will-change: transform;
`;
