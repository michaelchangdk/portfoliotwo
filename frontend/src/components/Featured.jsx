import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { urlFor } from "../client";
// Styling imports
import styled from "styled-components/macro";
import { BebasH3, BebasP } from "../styles/global";
// Function imports
import { joinString } from "../helpers/functions";

const Featured = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [selected, isSelected] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  const leftItem = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => {
      return {
        x: 0,
        opacity: 1,
        transition: { duration: 0.9, delay: 1 },
      };
    },
  };

  const rightItem = {
    hidden: { x: 100, opacity: 0 },
    visible: (i) => {
      return {
        x: 0,
        opacity: 1,
        transition: { duration: 0.9, delay: 1 },
      };
    },
  };

  console.log(!(index % 2), project.title, selected);

  return (
    <>
      <div
        style={
          selected
            ? {
                background: "rgba(0, 0, 0, 0.2)",
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 8,
              }
            : {}
        }
      ></div>
      <motion.div
        layout
        style={
          selected
            ? {
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                // background: "rgba(0, 0, 0, 0.2)",
                zIndex: 10,
              }
            : {}
        }
      >
        <ProjectWrapper
          layout
          ref={ref}
          left={!(index % 2) ? 1 : 0}
          initial="hidden"
          animate={controls}
          variants={!(index % 2) ? leftItem : rightItem}
          viewport={{ once: true, amount: 0.8 }}
          custom={3}
          id={`featured_project${index}`}
          style={
            selected
              ? {
                  position: "absolute",
                  background: "#fff",
                  top: 25,
                  left: "5%",
                  right: "5%",
                  padding: "16px",
                  border: "2px solid #444",
                }
              : {}
          }
          selected={selected ? 1 : 0}
        >
          <ImageWrapper
            whileHover={selected ? {} : { scale: 0.95 }}
            onClick={() => isSelected(!selected)}
          >
            <ProjectImage
              src={urlFor(project.image.asset._ref)}
              whileHover={selected ? {} : { scale: 1.3 }}
              selected={selected ? 1 : 0}
              left={!(index % 2) ? 1 : 0}
            />
          </ImageWrapper>
          {
            <ProjectText
              left={!(index % 2) ? 1 : 0}
              selected={selected ? 1 : 0}
            >
              <BebasH3 align={!(index % 2) ? "right" : ""}>
                {project.title}
              </BebasH3>
              <BebasP align={!(index % 2) ? "right" : ""}>
                {joinString(project.stack)}
              </BebasP>
            </ProjectText>
          }
          {/* {selected && (
            <>
              <p>This is selected</p>
            </>
          )} */}
        </ProjectWrapper>
      </motion.div>
    </>
  );
};

export default Featured;

const ProjectWrapper = styled(motion.div)`
  display: grid;
  gap: 12px;
  align-items: center;
  grid-template-rows: auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: ${(props) =>
      props.selected ? "1fr" : props.left ? "1fr 1.3fr" : "1.3fr 1fr"};
    grid-template-rows: ${(props) => (props.selected ? "1fr" : "auto")};
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  grid-row-start: ${(props) => (props.selected ? "0" : props.left ? "0" : "2")};

  @media (min-width: 768px) {
    grid-row-start: ${(props) =>
      props.selected ? "3" : props.left ? "1" : "1"};
    /* grid-row-start: 1; */
    grid-column-start: ${(props) => (props.left ? "1" : "0")};
  }
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

const ProjectText = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row-start: ${(props) => (props.selected ? "3" : props.left ? "3" : "1")};

  @media (min-width: 768px) {
    grid-row-start: ${(props) =>
      props.selected ? "3" : props.left ? "1" : "1"};
    grid-column-start: ${(props) =>
      props.selected ? "1" : props.left ? "1" : "2"};
  }
`;
