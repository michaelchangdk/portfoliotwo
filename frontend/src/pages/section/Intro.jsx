import React from "react";
import { H1, P, SectionWrapper, SvgButton } from "../../styles/global";
import { motion } from "framer-motion";

const Intro = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => {
      const delay = (1 + i) * 0.5;
      return {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      };
    },
  };

  const svgWrapper = {
    visible: (i) => {
      return {
        // y: isHovered ? 0 : [0, 10, 0],
        y: [0, 10, 0],
        transition: {
          duration: 1.5,
          type: "spring",
          repeat: Infinity,
        },
      };
    },
  };

  const svg = {
    hidden: { y: 100, pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = (1 + i) * 0.5;
      return {
        pathLength: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, delay: delay },
      };
    },
  };

  return (
    <SectionWrapper>
      <H1 initial="hidden" animate="visible" variants={item} custom={1}>
        Hi! I'm Michael.
      </H1>
      <P initial="hidden" animate="visible" variants={item} custom={3}>
        I like to make things for the information superhighway.
      </P>
      <P initial="hidden" animate="visible" variants={item} custom={5}>
        I'm a front-end developer who is motivated by creating impactful, fun,
        and user-friendly sites and web apps.
      </P>
      <P initial="hidden" animate="visible" variants={item} custom={7}>
        Right now, I'm focused on finding the perfect job match in the tech
        industry.
      </P>
      <SvgButton
        animate="visible"
        variants={svgWrapper}
        custom={9}
        // onHoverStart={() => setIsHovered(true)}
        // onHoverEnd={() => setIsHovered(false)}
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 240.811 350"
        >
          <motion.path
            d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0
		c-4.74,4.752-4.74,12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859
		c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z"
            fill="transparent"
            stroke="#000000"
            strokeWidth="12"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            variants={svg}
            custom={9}
          />
        </motion.svg>
      </SvgButton>
    </SectionWrapper>
  );
};

export default Intro;
