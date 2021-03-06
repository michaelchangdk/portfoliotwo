import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { urlFor } from "../client";
// Styling & asset imports
import styled from "styled-components/macro";
import { BebasH3, BebasP, SpaceP, IconButton } from "../styles/global";
import link from "../assets/icons/link.png";
import github from "../assets/icons/github.png";
// Function imports
import { joinString } from "../helpers/functions";

const Featured = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const [selected, isSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  useEffect(() => {
    if (selected && selectedIndex === index) {
      document.body.style.overflow = "hidden";
    } else if (!selected && selectedIndex === index + 1) {
      document.body.style.overflow = "unset";
      setSelectedIndex(null);
    }
  }, [index, selected, selectedIndex]);

  return (
    <>
      <motion.div
        layout
        style={
          selected
            ? {
                // background: "rgba(0, 0, 0, 0.6)",
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 10,
                overscrollBehavior: "contain",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px 2%",
              }
            : {}
        }
        onClick={() => {
          isSelected(!selected);
          setSelectedIndex(selectedIndex === null ? index : index + 1);
        }}
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
                  // position: "absolute",
                  background: "#fff",
                  // top: 25,
                  // left: "5%",
                  // right: "5%",
                  // padding: "16px",
                  // width: "90%",
                  maxWidth: "900px",
                  border: "2px solid black",
                }
              : {}
          }
          selected={selected ? 1 : 0}
        >
          <ImageWrapper
            whileHover={selected ? {} : { scale: 0.95 }}
            onClick={() => {
              isSelected(!selected);
              setSelectedIndex(selectedIndex === null ? index : index + 1);
            }}
          >
            <ProjectImage
              src={urlFor(project.image.asset._ref)}
              whileHover={selected ? {} : { scale: 1.3 }}
              selected={selected ? 1 : 0}
              left={!(index % 2) ? 1 : 0}
            />
          </ImageWrapper>

          <ProjectText
            left={!(index % 2) ? 1 : 0}
            selected={selected ? 1 : 0}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BebasH3 align={!(index % 2) ? "right" : ""}>
              {project.title}
            </BebasH3>
            <BebasP align={!(index % 2) ? "right" : ""}>
              {joinString(project.stack)}
            </BebasP>
          </ProjectText>

          {selected && (
            <ModalContainer
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <SpaceP>{project.description}</SpaceP>
              <IconWrapper>
                <IconButton
                  whileHover={{ scale: 1.1, y: -5 }}
                  onClick={() => window.open(`${project.github}`, "_blank")}
                >
                  <Icon src={github} alt="Github link" />
                </IconButton>
                <IconButton
                  whileHover={{ scale: 1.1, y: -5 }}
                  onClick={() => window.open(`${project.live}`, "_blank")}
                >
                  <Icon src={link} alt="Live link" />
                </IconButton>
              </IconWrapper>
            </ModalContainer>
          )}
        </ProjectWrapper>
      </motion.div>
      {selected && (
        <ProjectWrapper style={{ display: "hidden" }}>
          <ImageWrapper>
            <ProjectImage
              src={urlFor(project.image.asset._ref)}
              style={{ visibility: "hidden" }}
            />
          </ImageWrapper>
          <ProjectText
            style={{ visibility: "hidden" }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <BebasH3 align={!(index % 2) ? "right" : ""}>
              {project.title}
            </BebasH3>
            <BebasP align={!(index % 2) ? "right" : ""}>
              {joinString(project.stack)}
            </BebasP>
          </ProjectText>
        </ProjectWrapper>
      )}
    </>
  );
};

export default Featured;

const ProjectWrapper = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) =>
    props.selected ? "column" : props.left ? "column-reverse" : "column"};
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: ${(props) =>
      props.selected ? "column" : props.left ? "row-reverse" : "row"};
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-self: center;
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
  align-self: center;
  padding: ${(props) => (props.selected ? "0 16px" : 0)};

  @media (min-width: 768px) {
    flex-basis: 70%;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 12px;
`;

const Icon = styled.img`
  height: 36px;
  width: 36px;
`;
