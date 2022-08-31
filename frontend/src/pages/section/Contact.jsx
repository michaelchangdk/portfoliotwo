import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Waypoint } from "react-waypoint";

import styled from "styled-components/macro";
import {
  // BungeeH2,
  KronaH2,
  SectionWrapper,
  PageWrapper,
} from "../../styles/global";

const Contact = ({ position, setCurrentPosition }) => {
  const controls = useAnimation();
  const colorControls = useAnimation();

  // const title = {
  //   hidden: { y: -100, opacity: 0 },
  //   visible: (i) => {
  //     const delay = i * 0.5;
  //     return {
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 0.5, delay: delay },
  //     };
  //   },
  // };

  const svg = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 1.5, delay: delay },
      };
    },
  };

  const section = {
    initial: { backgroundColor: "#000000" },
    visible: { backgroundColor: "#ffffff" },
  };

  const text = {
    initial: { color: "#ffffff" },
    visible: { color: "#000000" },
  };

  const onEnter = () => {
    controls.start("visible");
  };

  useEffect(() => {
    if (position === "inside" || position === "above") {
      colorControls.start("visible");
    } else if (position !== "inside") {
      colorControls.start("initial");
    }
  });

  return (
    <SectionWrapper
      initial="initial"
      variants={section}
      animate={colorControls}
      style={{ padding: "84px 0" }}
    >
      <PageWrapper position="relative">
        <ContactWrapper>
          <KronaH2
            // size="5rem"
            align="center"
            // initial="hidden"
            // animate={controls}
            // variants={title}
            custom={1}
            padding="0 0 56px 0"
            initial="initial"
            variants={text}
            animate={colorControls}
            color="black"
          >
            FIND ME
          </KronaH2>
          <SocialsWrapper>
            <SocialsButton
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() =>
                window.open("https://github.com/michaelchangdk", "_blank")
              }
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
                  custom={1}
                />
              </motion.svg>
            </SocialsButton>

            <Waypoint
              onEnter={(props) => setCurrentPosition(props.currentPosition)}
              onLeave={(props) => setCurrentPosition(props.currentPosition)}
            />

            <SocialsButton
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() =>
                window.open("mailto:michaelchangdk@icloud.com?subject=Hello!")
              }
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
                  custom={2}
                />
              </motion.svg>
            </SocialsButton>

            <Waypoint onEnter={(props) => onEnter(props)} />
            <SocialsButton
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/michaelchangdk/",
                  "_blank"
                )
              }
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
                  custom={3}
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
                  custom={3}
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
                  custom={3}
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
                  custom={3}
                />
              </motion.svg>
            </SocialsButton>

            <span />
            <SocialsButton
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() => window.open("", "_blank")}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 -10 520 540"
              >
                <motion.path
                  d="M484.078,27.923C466.072,9.918,442.131,0.002,416.667,0.002L95.334,0C42.766,0.003,0,42.77,0.001,95.334L0,416.668
			C0.001,469.234,42.768,512,95.335,512h321.332C469.234,512,512,469.234,512,416.667V95.335
			C512,69.87,502.084,45.929,484.078,27.923z M482,416.667C482,452.692,452.692,482,416.667,482H95.335
			C59.31,482,30.001,452.691,30,416.667l0.001-321.334C30,59.31,59.309,30.002,95.335,30l321.332,0.002
			c17.451,0,33.858,6.795,46.198,19.134C475.205,61.476,482,77.883,482,95.335V416.667z"
                  fill="transparent"
                  stroke="#000000"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial="hidden"
                  animate={controls}
                  variants={svg}
                  custom={4}
                />
                <motion.path
                  d="M346.131,217.492c-5.857-5.857-15.355-5.858-21.213,0L271,271.412L270.999,111.4c0-8.284-6.716-15-15-15s-15,6.716-15,15
			L241,271.415l-53.922-53.921c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l79.528,79.526
			c2.813,2.814,6.628,4.394,10.606,4.394s7.794-1.581,10.607-4.394l79.526-79.528C351.989,232.847,351.989,223.35,346.131,217.492z"
                  fill="transparent"
                  stroke="#000000"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial="hidden"
                  animate={controls}
                  variants={svg}
                  custom={4}
                />
                <motion.path
                  d="M400.602,385.601h-289.2c-8.284,0-15,6.716-15,15s6.716,15,15,15h289.2c8.284,0,15-6.716,15-15
			C415.602,392.316,408.886,385.601,400.602,385.601z"
                  fill="transparent"
                  stroke="#000000"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial="hidden"
                  animate={controls}
                  variants={svg}
                  custom={4}
                />
              </motion.svg>
            </SocialsButton>

            {/* <span />

            <SocialsButton
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() =>
                window.open("https://medium.com/@michaelchangdk", "_blank")
              }
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 -10 520 540"
              >
                <motion.path
                  d="m501.386 98.614c-.076-.03-.152-.066-.226-.088l-131.431-37.939c-23.833-9.171-51.14-.438-65.201 20.962-.089.136-.176.273-.261.411l-69.213 113.178-39.346-67.847c-.01-.017-.025-.03-.035-.047-1.404-2.4-3.468-4.411-6.029-5.74l-109.929-57.083c-17.06-8.857-37.051-8.188-53.479 1.793-16.428 9.979-26.236 27.414-26.236 46.635v243.804c0 20.916 11.649 39.663 30.402 48.926l88.597 43.762c7.699 3.803 15.963 5.689 24.199 5.689 9.984 0 19.926-2.773 28.768-8.268 16.134-10.025 25.767-27.353 25.767-46.348v-34.641l132.233 45.532 109.701 37.774c5.908 2.034 11.954 3.037 17.942 3.037 11.129 0 22.058-3.465 31.512-10.208 14.54-10.37 22.879-26.562 22.879-44.422v-284.527c0-6.758-4.47-12.469-10.614-14.345zm-171.666-.771c6.433-9.608 18.834-13.444 29.58-9.123.471.189.95.354 1.438.495l113.787 32.846-139.78 244.98-82.574-142.388zm-161.988 302.572c0 8.68-4.229 16.285-11.601 20.867-7.374 4.581-16.065 5.003-23.847 1.16l-88.596-43.762c-8.443-4.17-13.688-12.61-13.688-22.027v-243.804c0-8.783 4.305-16.437 11.812-20.997 3.993-2.426 8.346-3.645 12.719-3.645 3.847 0 7.71.943 11.359 2.838l101.843 52.883v256.487zm30-66.369v-143.463l23.967 41.328c.023.041.047.081.071.122l79.918 137.808zm273.967 83.441c-6.546 4.67-14.661 5.848-22.266 3.229l-92.585-31.881 125.152-219.341v227.992c0 8.041-3.754 15.331-10.301 20.001z"
                  fill="transparent"
                  stroke="#000000"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial="hidden"
                  animate={controls}
                  variants={svg}
                  custom={5}
                />
              </motion.svg>
            </SocialsButton> */}

            <span />
            <SocialsButton
              whileHover={{ scale: 1.1, y: -5 }}
              onClick={() => window.open("tel:+4542726227")}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 -10 520 540"
              >
                <motion.path
                  d="m397.835938 302.730469c-.082032-.082031-.160157-.164063-.242188-.246094-.035156-.035156-.078125-.078125-.121094-.117187l-28.671875-28.671876c-8.058593-8.0625-18.773437-12.5-30.171875-12.5-11.328125 0-21.988281 4.386719-30.03125 12.355469-.058594.054688-.113281.113281-.171875.167969l-15.238281 15.242188-70.175781-70.179688 15.234375-15.238281c.058594-.054688.113281-.113281.167968-.167969 16.496094-16.648438 16.453126-43.613281-.140624-60.207031l-28.628907-28.632813c-.054687-.054687-.105469-.105468-.15625-.15625-8.058593-8.042968-18.765625-12.472656-30.148437-12.472656-11.347656 0-22.019532 4.402344-30.066406 12.390625-.109376.109375-.21875.21875-.324219.332031l-13.148438 13.144532c-6.917969 6.917968-12.226562 12.226562-12.433593 12.4375-20.304688 20.300781-25.050782 52.664062-13.363282 91.128906 10.703125 35.230468 34.253906 72.289062 66.308594 104.347656 44.75 44.75 99.554688 72.546875 143.019531 72.546875 21.496094 0 39.640625-6.777344 52.398438-19.539063.265625-.261718 7.605469-7.601562 16.320312-16.316406l9.542969-9.542968c.015625-.015626.03125-.03125.050781-.050782 16.394531-16.449218 16.550781-43.125.445313-59.773437-.082032-.097657-.171875-.195313-.253906-.28125zm-21.347657 38.78125c-.089843.089843-.179687.179687-.269531.273437l-9.378906 9.378906c-8.566406 8.566407-15.800782 15.800782-16.265625 16.261719-7.171875 7.171875-17.683594 10.808594-31.242188 10.808594-35.261719 0-83.070312-25.027344-121.804687-63.757813-28.636719-28.636718-49.523438-61.257812-58.820313-91.859374-8.195312-26.964844-6.054687-49.269532 5.882813-61.207032l12.421875-12.421875 13.355469-13.355469c.050781-.050781.097656-.097656.144531-.148437 2.378906-2.308594 5.503906-3.578125 8.828125-3.578125 3.339844 0 6.484375 1.285156 8.871094 3.621094.03125.035156.066406.070312.105468.105468l28.742188 28.746094c4.941406 4.941406 4.941406 12.980469 0 17.921875-.007813.007813-.015625.019531-.027344.027344v.003906l-25.84375 25.84375c-5.855469 5.859375-5.855469 15.355469 0 21.214844l91.394531 91.390625c2.8125 2.816406 6.628907 4.394531 10.605469 4.394531 3.980469 0 7.796875-1.582031 10.609375-4.394531l25.679687-25.6875c.09375-.085938.183594-.179688.273438-.269531 2.386719-2.339844 5.535156-3.628907 8.878906-3.628907 3.382813 0 6.5625 1.320313 8.957032 3.710938l28.667968 28.664062.0625.066407c.03125.03125.0625.0625.089844.09375 4.875 4.902343 4.898438 12.84375.082031 17.78125zm0 0"
                  fill="transparent"
                  stroke="#000000"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial="hidden"
                  animate={controls}
                  variants={svg}
                  custom={5}
                />
                <motion.path
                  d="m437.019531 74.980469c-48.351562-48.351563-112.636719-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.355469-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.664062-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.636719 74.980469-181.019531 0-68.378906-26.628906-132.664062-74.980469-181.019531zm-181.019531 407.019531c-124.617188 0-226-101.386719-226-226s101.382812-225.996094 226-226c124.617188.003906 226 101.386719 226 226-.003906 124.617188-101.386719 226-226 226zm0 0"
                  fill="transparent"
                  stroke="#000000"
                  strokeWidth="16"
                  strokeLinecap="round"
                  initial="hidden"
                  animate={controls}
                  variants={svg}
                  custom={5}
                />
              </motion.svg>
            </SocialsButton>
          </SocialsWrapper>
        </ContactWrapper>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div``;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

const SocialsButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  border: none;
`;
