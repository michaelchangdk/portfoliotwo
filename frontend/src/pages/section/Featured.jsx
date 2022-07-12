import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Styling & Asset Imports
import styled from "styled-components/macro";
import {
  H2,
  P,
  TagSpan,
  PageWrapper,
  SectionWrapper,
} from "../../styles/global";
import link from "../../assets/share.png";
import github from "../../assets/github-logo-face.png";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
import { urlFor } from "../../client";
// Query Declarations
const query = `*[_type == "featuredprojects" && !(_id in path('drafts.**'))] {title, featured[]->}`;

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1,
    transition: { duration: 0.35 },
    zIndex: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  notSelected: (i) => ({
    rotateY: i * 4,
    scale: 1 - Math.abs(i * 0.1),
    x: i ? i * 2 : 0,
    opacity: 1 - Math.abs(i * 0.15),
    zIndex: 10 - Math.abs(i),
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    transition: { duration: 0.35 },
  }),
};

const Featured = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [loading, data] = FetchSection(query);
  const [project, setProject] = useState([]);
  const { ref, inView } = useInView();
  const loadControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (inView) {
      loadControls.start("visible");
    }
  });

  const leftItem = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay },
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
        transition: { duration: 1, delay: delay },
      };
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, transition: { duration: 0.7 } },
    visible: (i) => {
      const delay = (1 + i) * 0.5;
      return {
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      };
    },
  };

  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: undefined,
    startScrollLeft: undefined,
    isDragging: false,
  });

  const containerRef = useRef();

  const cardRefs = useRef([]);

  useEffect(() => {
    const { scrollWidth, clientWidth } = containerRef.current;
    const halfScroll = (scrollWidth - clientWidth) / 2;
    containerRef.current.scrollLeft = halfScroll;
  }, []);

  const handleMouseDown = (e) => {
    setDragStart({
      startX: e.pageX - containerRef.current.offsetLeft,
      startScrollLeft: containerRef.current.scrollLeft,
      isDragging: true,
    });
  };
  const handleMouseMove = (e) => {
    if (!isDragging || selectedCard) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const selectCard = (card) => {
    setSelectedCard(selectedCard ? null : card);
    if (card && !selectedCard) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleCardMouseUp = (e, card) => {
    if (isDragging) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) < 5) selectCard(card);
    } else selectCard(card);
  };

  useEffect(() => {
    if (selectedCard !== null) {
      setProject(data[0].featured[selectedCard - 1]);
      cardControls.start("visible");
    } else if (selectedCard === null) {
      // setTimeout(setProject([]), 1000);
      // setProject([]);
      cardControls.start("hidden");
    }
  }, [selectedCard, data, cardControls]);

  return (
    <SectionWrapper>
      <PageWrapper style={{ position: "relative" }}>
        <H2
          initial="hidden"
          animate={loadControls}
          variants={leftItem}
          custom={2}
        >
          {!loading && data[0].title}
        </H2>
      </PageWrapper>
      <section ref={ref}>
        <Flashcards
          onMouseDown={handleMouseDown}
          onMouseUp={() =>
            setDragStart((prev) => ({ ...prev, isDragging: false }))
          }
          onMouseMove={handleMouseMove}
          initial="hidden"
          animate={loadControls}
          variants={rightItem}
          custom={4}
        >
          <FlashcardsContainer ref={containerRef}>
            {!loading &&
              data[0].featured.map((card, i) => (
                <FlashCard
                  key={card._id}
                  ref={(el) => cardRefs.current.push(el)}
                  onMouseUp={(e) => handleCardMouseUp(e, i + 1)}
                  variants={cardVariants}
                  animate={selectedCard === i + 1 ? "selected" : "notSelected"}
                  custom={selectedCard ? selectedCard - (i + 1) : 0}
                >
                  {i + 1 === selectedCard && (
                    <CardBack>
                      <P
                        align="center"
                        weight="500"
                        padding="8px 0"
                        initial="hidden"
                        animate={cardControls}
                        variants={fadeVariants}
                        custom={0}
                      >
                        {card.title}
                      </P>
                      <P
                        initial="hidden"
                        animate={cardControls}
                        variants={fadeVariants}
                        custom={0}
                        padding="0 0 8px 0"
                      >
                        {card.shortDescription}
                      </P>
                      {card.stack.map((stack, i) => (
                        <TagSpan
                          key={i}
                          initial="hidden"
                          animate={cardControls}
                          variants={fadeVariants}
                          custom={i + 1}
                        >
                          {stack}
                        </TagSpan>
                      ))}
                    </CardBack>
                  )}
                  {i + 1 !== selectedCard && (
                    <CardFront>
                      <CardImage
                        src={urlFor(card.image.asset._ref)}
                        alt={card.title}
                      />
                    </CardFront>
                  )}
                </FlashCard>
              ))}
          </FlashcardsContainer>
        </Flashcards>
        <PageWrapper style={{ position: "relative" }}>
          <FeaturedDescriptionContainer>
            <P
              initial="hidden"
              animate={cardControls}
              variants={fadeVariants}
              custom={0}
            >
              {project.description}
            </P>
            <LinkWrapper>
              <LinkButton
                initial="hidden"
                animate={cardControls}
                variants={fadeVariants}
                custom={1}
                whileHover={{ scale: 1.2 }}
              >
                <LinkImage src={link} alt="Live link" />
              </LinkButton>
              <LinkButton
                initial="hidden"
                animate={cardControls}
                variants={fadeVariants}
                custom={1}
                whileHover={{ scale: 1.2 }}
              >
                <LinkImage src={github} alt="Github link" />
              </LinkButton>
            </LinkWrapper>
          </FeaturedDescriptionContainer>
        </PageWrapper>
      </section>
    </SectionWrapper>
  );
};

export default Featured;

const FeaturedDescriptionContainer = styled.div`
  /* min-height: 100px; */
  width: 100%;
  display: grid;
  padding: 0 12px;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 0;
    grid-template-columns: auto auto;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const LinkImage = styled(motion.img)`
  width: 32px;
  height: 32px;
`;

const LinkButton = styled(motion.button)`
  cursor: pointer;
  background: transparent;
  border: none;
`;

const Flashcards = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlashcardsContainer = styled.div`
  min-height: 100%;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  perspective: 300px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlashCard = styled(motion.div)`
  position: relative;
  display: inline-block;
  height: 300px;
  width: 300px;
  background: white;
  margin: 32px 16px;
  border-radius: 10%;
  cursor: pointer;

  &:first-of-type {
    margin-left: 28px;
  }
  &:last-of-type {
    margin-right: 32px;
  }

  @media (min-width: 768px) {
    height: 340px;
    width: 340px;
    &:first-of-type {
      margin-left: 264px;
    }
    &:last-of-type {
      margin-right: 264px;
    }
  }
`;

const CardFront = styled.div`
  height: 300px;
  width: 300px;

  @media (min-width: 768px) {
    height: 340px;
    width: 340px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const CardBack = styled.div`
  transform: rotateY(180deg);
  padding: 8px 16px;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
  height: 300px;
  width: 300px;
  /* cursor: default; */

  @media (min-width: 768px) {
    height: 340px;
    width: 340px;
  }
`;
