import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Styling Imports
import styled from "styled-components/macro";
import { H2, P, SectionWrapper } from "../../styles/global";
// Function Imports
import { FetchSection } from "../../services/clientFunctions";
import { urlFor } from "../../client";
// Query Declarations
const query = `*[_type == "featuredprojects" && !(_id in path('drafts.**'))] {title, featured[]->}`;

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: { duration: 0.35 },
    zIndex: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  notSelected: (i) => ({
    // rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
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
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

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

  console.log(loading, data);

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

  return (
    <SectionWrapper>
      <FeaturedContainer ref={ref}>
        <H2 initial="hidden" animate="visible" variants={item} custom={1}>
          {!loading && data[0].title}
        </H2>
        <Flashcards
          onMouseDown={handleMouseDown}
          onMouseUp={() =>
            setDragStart((prev) => ({ ...prev, isDragging: false }))
          }
          onMouseMove={handleMouseMove}
          initial="hidden"
          animate="visible"
          variants={item}
          custom={2}
        >
          <FlashcardsContainer ref={containerRef}>
            {/* {cards.map((card, i) => (
            <FlashCard
              key={card}
              ref={(el) => cardRefs.current.push(el)}
              onMouseUp={(e) => handleCardMouseUp(e, card)}
              variants={cardVariants}
              animate={selectedCard === card ? "selected" : "notSelected"}
              custom={selectedCard ? selectedCard - card : 0}
            >
              {card === selectedCard && (
                <CardBack>
                  {selectedCard} {i} {card} Back
                </CardBack>
              )}
              {card !== selectedCard && (
                <CardFront>
                  {selectedCard} {i} {card} Front
                </CardFront>
              )}
            </FlashCard>
          ))} */}
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
                      <P>
                        This is text that takes up the entire div. This is text
                        that takes up the entire div. This is text that takes up
                        the entire div. This is text that takes up the entire
                        div. This is text that takes up the entire div.
                      </P>
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
      </FeaturedContainer>
    </SectionWrapper>
  );
};

export default Featured;

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Flashcards = styled(motion.div)`
  /* height: 100%; */
  width: 100%;
  display: grid;
  place-items: center center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlashcardsContainer = styled.div`
  max-width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  perspective: 150px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardFront = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const CardBack = styled.div`
  transform: rotateY(180deg);
  padding: 8px;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

const FlashCard = styled(motion.div)`
  position: relative;
  display: inline-block;
  height: 240px;
  width: 240px;
  background: white;
  margin: 32px 16px;
  border-radius: 16px;
  cursor: pointer;
`;
