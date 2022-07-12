import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
import { urlFor } from "../../client";
// Styling & Asset Imports
import styled from "styled-components/macro";
import {
  H2,
  P,
  PageWrapper,
  SectionWrapper,
  BioWrapper,
  ImageWrapper,
  ProfileImage,
} from "../../styles/global";
import background from "../../assets/images/biobackground.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";

const query = `*[_type == "bio" && !(_id in path('drafts.**'))]`;

const Bio = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const transformControls = useAnimation();
  const [loading, data] = FetchSection(query);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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

  // const svg = {
  //   hidden: { pathLength: 0, opacity: 0 },
  //   visible: (i) => {
  //     const delay = (1 + i) * 0.5;
  //     return {
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: { duration: 1.5, delay: delay },
  //     };
  //   },
  // };

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
                <H2
                  initial="hidden"
                  animate={controls}
                  variants={leftItem}
                  custom={2}
                >
                  {data[0].title}
                </H2>
                {data[0].about.map((item, i) => (
                  <P
                    initial="hidden"
                    animate={controls}
                    variants={leftItem}
                    custom={i + 4 + i + i}
                    key={i}
                  >
                    {item}
                  </P>
                ))}
              </div>
              <ImageWrapper
              // initial="hidden"
              // animate={controls}
              // variants={rightItem}
              // custom={10}
              >
                <IconsWrapper>
                  {/* <SocialsButton whileHover={{ scale: 1.1 }}>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 -10 520 540"
                    >
                      <motion.path
                        d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="16"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={controls}
                        variants={svg}
                        custom={9}
                      />
                    </motion.svg>
                  </SocialsButton>

                  <SocialsButton whileHover={{ scale: 1.1 }}>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 -10 520 540"
                    >
                      <motion.path
                        d="M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="16"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={controls}
                        variants={svg}
                        custom={9}
                      />
                    </motion.svg>
                  </SocialsButton>
                  <SocialsButton whileHover={{ scale: 1.1 }}>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 -10 520 540"
                    >
                      <motion.path
                        d="m151 181h-60c-8.285156 0-15 6.714844-15 15v240c0 8.285156 6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15v-240c0-8.285156-6.714844-15-15-15zm-15 240h-30v-210h30zm0 0"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="16"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={controls}
                        variants={svg}
                        custom={9}
                      />
                      <motion.path
                        d="m121 61c-24.8125 0-45 20.1875-45 45s20.1875 45 45 45 45-20.1875 45-45-20.1875-45-45-45zm0 60c-8.269531 0-15-6.730469-15-15s6.730469-15 15-15 15 6.730469 15 15-6.730469 15-15 15zm0 0"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="16"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={controls}
                        variants={svg}
                        custom={9}
                      />
                      <motion.path
                        d="m355.640625 181.925781c-24.507813-3.976562-49.59375.6875-69.738281 12.339844-.863282-7.46875-7.207032-13.265625-14.902344-13.265625h-60c-8.285156 0-15 6.714844-15 15v240c0 8.285156 6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15v-135c0-16.542969 13.457031-30 30-30s30 13.457031 30 30v135c0 8.285156 6.714844 15 15 15h60c8.285156 0 15-6.714844 15-15v-161.460938c0-44.796874-31.660156-84.710937-80.359375-92.613281zm50.359375 239.074219h-30v-120c0-33.085938-26.914062-60-60-60s-60 26.914062-60 60v120h-30v-210h30v15c0 6.066406 3.65625 11.535156 9.261719 13.859375 5.601562 2.320313 12.054687 1.035156 16.34375-3.253906l6.996093-6.996094c14.726563-14.722656 39.15625-21.816406 62.234376-18.070313 35.308593 5.730469 55.164062 33.945313 55.164062 63zm0 0"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="16"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={controls}
                        variants={svg}
                        custom={9}
                      />
                      <motion.path
                        d="m436 0h-360c-41.484375 0-76 34.542969-76 76v360c0 41.484375 34.542969 76 76 76h360c41.484375 0 76-34.542969 76-76v-360c0-41.484375-34.542969-76-76-76zm46 436c0 24.933594-21.066406 46-46 46h-360c-24.933594 0-46-21.066406-46-46v-360c0-24.933594 21.066406-46 46-46h360c24.933594 0 46 21.066406 46 46zm0 0"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="16"
                        strokeLinecap="round"
                        initial="hidden"
                        animate={controls}
                        variants={svg}
                        custom={9}
                      />
                    </motion.svg>
                  </SocialsButton> */}
                  <SocialsButton
                    whileHover={{ scale: 1.1 }}
                    initial="hidden"
                    variants={fadeIn}
                    animate={transformControls}
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
                  </SocialsButton>
                  <SocialsButton
                    whileHover={{ scale: 1.1 }}
                    initial="hidden"
                    variants={fadeIn}
                    animate={transformControls}
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
                  </SocialsButton>
                  <SocialsButton
                    whileHover={{ scale: 1.1 }}
                    initial="hidden"
                    variants={fadeIn}
                    animate={transformControls}
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
                  </SocialsButton>
                </IconsWrapper>
                <ProfileImage
                  src={urlFor(data[0].image.asset._ref)}
                  alt="Michael Chang"
                  initial="hidden"
                  animate={transformControls}
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

const SocialsButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  border: none;
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
