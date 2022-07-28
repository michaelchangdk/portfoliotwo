import React from "react";
// import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import introParticlesConfig from "../../config/introParticlesConfig";
// Function Import
import { FetchSection } from "../../services/clientFunctions";
// Styling Import
import {
  KronaH1,
  BhostraH1,
  SpaceP,
  PageWrapper,
  SectionWrapper,
  // DownButton,
} from "../../styles/global";
import background from "../../assets/images/introbackground.jpg";
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

  // const svgWrapper = {
  //   visible: (i) => {
  //     return {
  //       // y: isHovered ? 0 : [0, 10, 0],
  //       y: [0, 10, 0],
  //       transition: {
  //         duration: 1.5,
  //         type: "spring",
  //         repeat: Infinity,
  //       },
  //     };
  //   },
  // };

  // const svg = {
  //   hidden: { y: 100, pathLength: 0, opacity: 0 },
  //   visible: (i) => {
  //     const delay = (1 + i) * 0.5;
  //     return {
  //       pathLength: 1,
  //       y: 0,
  //       opacity: 1,
  //       transition: { duration: 1.5, delay: delay },
  //     };
  //   },
  // };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
    <>
      <SectionWrapper
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,1) 100%), url(${background})`,
          backgroundSize: "cover",
          // backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          // backgroundPositionY: "bottom",
          backgroundPositionX: "center",
        }}
        bg="black"
        minheight="100vh"
      >
        <div
          style={{
            position: "absolute",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, .7) 95%, rgba(0, 0, 0, 1) 100%)",
            zIndex: 3,
            height: "100vh",
            width: "100vw",
          }}
        />
        <div
          style={{
            position: "absolute",
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            // loaded={particlesLoaded}
            options={introParticlesConfig}
            height="100vh"
            width="100vw"
          />
        </div>
        <PageWrapper style={{ height: "100vh", width: "100vw" }}>
          {!loading && (
            <>
              <KronaH1
                initial="hidden"
                animate="visible"
                variants={item}
                custom={1}
                color="white"
                align="center"
                weight="500"
                size="1.25rem"
                padding="0 0 8px 0"
              >
                {data[0].title}
              </KronaH1>
              <BhostraH1
                initial="hidden"
                animate="visible"
                variants={item}
                custom={3}
                color="white"
                align="center"
              >
                {data[0].headline}
              </BhostraH1>
              {data[0].sentences.map((sentence, i) => (
                <SpaceP
                  key={i}
                  initial="hidden"
                  animate="visible"
                  variants={item}
                  custom={i + 6}
                  color="white"
                  align="center"
                  weight="600"
                  size="20px"
                >
                  {sentence}
                </SpaceP>
              ))}
            </>
          )}
        </PageWrapper>
        {/* <DownButton
          animate="visible"
          variants={svgWrapper}
          custom={13}
          // onHoverStart={() => setIsHovered(true)}
          // onHoverEnd={() => setIsHovered(false)}
          onClick={() =>
            document
              .getElementById("bio_section")
              .scrollIntoView({ behavior: "smooth" })
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
              custom={14}
            />
          </motion.svg>
        </DownButton> */}
      </SectionWrapper>
    </>
  );
};

export default Intro;
