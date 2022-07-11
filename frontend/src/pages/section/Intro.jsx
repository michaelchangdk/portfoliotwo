import React from "react";
import { motion } from "framer-motion";
// Function Import
import { FetchSection } from "../../services/clientFunctions";
// Styling Import
import {
  H1,
  P,
  PageWrapper,
  SectionWrapper,
  SvgButton,
} from "../../styles/global";
// Query declarations
const query = `*[_type == "intro" && !(_id in path('drafts.**'))]`;

const Intro = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [loading, data] = FetchSection(query);
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
      <PageWrapper>
        {!loading && (
          <>
            <H1
              initial="hidden"
              animate="visible"
              variants={item}
              custom={1}
              style={{ color: "white" }}
            >
              {data[0].title}
            </H1>
            {data[0].sentences.map((sentence, i) => (
              <P
                key={i}
                initial="hidden"
                animate="visible"
                variants={item}
                custom={i + 4 + i}
                style={{ textAlign: "center", color: "white" }}
              >
                {sentence}
              </P>
            ))}
            <SvgButton
              animate="visible"
              variants={svgWrapper}
              custom={8}
              // onHoverStart={() => setIsHovered(true)}
              // onHoverEnd={() => setIsHovered(false)}
              onClick={() =>
                window.scrollBy({
                  top: document.documentElement.clientHeight,
                  behavior: "smooth",
                })
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
                  stroke="#ffffff"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial="hidden"
                  animate="visible"
                  variants={svg}
                  custom={9}
                />
              </motion.svg>
            </SvgButton>
          </>
        )}
      </PageWrapper>
    </SectionWrapper>
  );
};

export default Intro;
