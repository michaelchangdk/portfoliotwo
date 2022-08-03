import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// Styling Imports
import styled from "styled-components/macro";
import { KronaH2, SectionWrapper, PageWrapper } from "../../styles/global";

const AllProjects = ({ position }) => {
  const [open, setOpen] = useState(true);
  const [bodyOpen, setBodyOpen] = useState(false);
  const colorControls = useAnimation();

  const sectionVariants = {
    initial: { backgroundColor: "#000000" },
    hidden: { backgroundColor: "#ffffff" },
  };

  const headerVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { y: "-120vh", height: 0, transition: { duration: 1.5 } },
  };

  const bodyVariants = {
    open: { y: 0, opacity: 1, height: "auto", transition: { delay: 1 } },
    closed: { y: "120vh", height: 0 },
  };

  useEffect(() => {
    if (position === "inside") {
      colorControls.start("hidden");
    } else if (position !== "inside") {
      colorControls.start("initial");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  return (
    <SectionWrapper
      style={{ overflow: "hidden" }}
      bg="black"
      minheight="20vh"
      initial="initial"
      variants={sectionVariants}
      animate={colorControls}
    >
      <PageWrapper>
        <HeaderWrapper
          onClick={() => {
            setOpen(!open);
            setBodyOpen(!bodyOpen);
          }}
          animate={open ? "open" : "closed"}
          initial="open"
          variants={headerVariants}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 512 512"
            whileHover={{
              y: [0, 10, 0],
              transition: { duration: 1.5, type: "spring", repeat: Infinity },
            }}
          >
            <path
              d="m478.547 402.813-54.061 102.031c-7.92 12.87-27.755 7.25-27.755-7.87v-83.521z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="m492 370.873-75.404 9.53c-.17-2.16-.589-4.32-1.258-6.45l-36.883-117.951 109.191 106.561c2.367 2.29 3.845 5.22 4.354 8.31z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="m33.453 402.813 81.816 10.41v83.751c0 15.12-19.835 20.74-27.755 7.87z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="m133.546 256.002-36.883 117.951c-.669 2.13-1.089 4.29-1.258 6.45l-75.405-9.53c.509-3.09 1.987-6.02 4.355-8.31z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="m270.04 9.74c-2.428-6.5-8.234-9.74-14.04-9.74s-11.612 3.24-14.04 9.74l-116.708 373.174 130.748-78.187 130.748 78.187z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="m256 339.673-64.997 38.87 10.147 30.44c2.037 6.13 7.76 10.26 14.222 10.26h81.257c6.462 0 12.185-4.13 14.222-10.26l10.147-30.44z"
              fill="#ffffff"
              data-original="#000000"
            />
          </motion.svg>
          <KronaH2 color="white">ALL PROJECTS</KronaH2>
        </HeaderWrapper>

        <ContentWrapper
          onClick={() => {
            setOpen(!open);
            setBodyOpen(!bodyOpen);
          }}
          animate={bodyOpen ? "open" : "closed"}
          initial="closed"
          variants={bodyVariants}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 192 192"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m151.949 105.972c-8.252 9.98-17.588 20.236-27.664 30.312s-20.331 19.416-30.309 27.665c.673.024 1.345.051 2.024.051a56.063 56.063 0 0 0 56-56c0-.68-.027-1.354-.051-2.028z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m175.2 28.805c-7.758-7.761-21.966-5.009-43.436 8.411a256.417 256.417 0 0 0 -22.843 16.3 55.963 55.963 0 0 0 -67.4 67.4 256.213 256.213 0 0 0 -16.3 22.843c-13.421 21.471-16.175 35.679-8.421 43.441a15.16 15.16 0 0 0 11.229 4.288c7.973 0 18.64-4.219 32.207-12.7 17.593-11 38.329-28.1 58.388-48.156s37.16-40.795 48.156-58.388c13.42-21.474 16.174-35.682 8.42-43.439zm-24.36 38.659c-10.413 15.783-25.869 34.2-43.523 51.849s-36.066 33.11-51.849 43.523c-15.531 10.246-23.9 12.569-26.977 12.677.108-3.075 2.431-11.446 12.677-26.977 2.271-3.442 4.8-7.015 7.516-10.672a56.528 56.528 0 0 0 10.727 12.473 370.122 370.122 0 0 0 42.249-36.68 370.2 370.2 0 0 0 36.68-42.246 56.49 56.49 0 0 0 -12.476-10.731c3.657-2.721 7.23-5.245 10.672-7.516 15.531-10.246 23.9-12.569 26.977-12.677-.108 3.076-2.431 11.446-12.677 26.977z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="m24 32a20.023 20.023 0 0 1 20 20 4 4 0 0 0 8 0 20.023 20.023 0 0 1 20-20 4 4 0 0 0 0-8 20.023 20.023 0 0 1 -20-20 4 4 0 0 0 -8 0 20.023 20.023 0 0 1 -20 20 4 4 0 0 0 0 8z"
              fill="#ffffff"
              data-original="#000000"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="152"
              cy="168"
              r="8"
              fill="#ffffff"
              data-original="#000000"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="16"
              cy="104"
              r="8"
              fill="#ffffff"
              data-original="#000000"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="176"
              cy="96"
              r="8"
              fill="#ffffff"
              data-original="#000000"
            />
          </motion.svg>
        </ContentWrapper>
      </PageWrapper>
    </SectionWrapper>
  );
};

export default AllProjects;

const HeaderWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  cursor: pointer;
`;

const ContentWrapper = styled(motion.div)``;
