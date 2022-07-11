import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Styling Import
import styled from "styled-components/macro";
import { SectionWrapper } from "../../styles/global";

const cards = [1, 2, 3, 4, 5];
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
      <Flashcards
        onMouseDown={handleMouseDown}
        onMouseUp={() =>
          setDragStart((prev) => ({ ...prev, isDragging: false }))
        }
        onMouseMove={handleMouseMove}
      >
        <FlashcardsContainer ref={containerRef}>
          {cards.map((card, i) => (
            <FlashCard
              key={card}
              ref={(el) => cardRefs.current.push(el)}
              onMouseUp={(e) => handleCardMouseUp(e, card)}
              variants={cardVariants}
              animate={selectedCard === card ? "selected" : "notSelected"}
              custom={selectedCard ? selectedCard - card : 0}
            >
              {card === selectedCard && <CardBack>Back</CardBack>}
              {card !== selectedCard && <CardFront>Front</CardFront>}
            </FlashCard>
          ))}
        </FlashcardsContainer>
      </Flashcards>
    </SectionWrapper>
  );
};

export default Featured;

const Flashcards = styled.div`
  height: 100%;
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

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardFront = styled.div``;

const CardBack = styled.div`
  transform: rotateY(180deg);
`;

const FlashCard = styled(motion.div)`
  position: relative;
  display: inline-block;
  height: 240px;
  width: 240px;
  background: white;
  margin: 32px 16px;
  border-radius: 15px;
  cursor: pointer;
`;
