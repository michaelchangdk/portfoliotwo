import React, { useState } from "react";
import { FetchSection } from "../../services/clientFunctions";
// Component Import
import Window from "../../components/Window";
import FeaturedCard from "../../components/FeaturedCard";
// Styling & Asset Imports
import styled from "styled-components/macro";
import { LinkButton } from "../../styles/global";
import { MusicPlayerFill } from "@styled-icons/bootstrap/MusicPlayerFill";
import { ExternalLink } from "@styled-icons/heroicons-outline/ExternalLink";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { SkipPrevious } from "@styled-icons/material-rounded/SkipPrevious";
import { SkipNext } from "@styled-icons/material-rounded/SkipNext";
import { Flip } from "@styled-icons/material/Flip";
// Query Declaration
const query = `*[_type == "featuredprojects" && !(_id in path('drafts.**'))] {featured[]->, title, color}`;

const Featured = (constraintsRef) => {
  const [loading, data] = FetchSection(query);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [flip, setFlip] = useState(false);

  const incrementCarousel = (array) => {
    setFade(true);
    setFlip(false);
    if (index === array.length - 1) {
      setIndex(0);
    }
    if (index !== array.length - 1) {
      setIndex(index + 1);
    }
  };

  const decrementCarousel = (array) => {
    setFade(true);
    setFlip(false);
    if (index === 0) {
      setIndex(array.length - 1);
    }
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const flipCard = () => {
    setFade(false);
    setFlip(!flip);
  };

  return (
    <>
      {!loading && (
        <Window
          title={data[0].title}
          navcolor="green"
          constraintsRef={constraintsRef}
          icon={MusicPlayerFill}
          allowMaximize={false}
        >
          <PlayWrapper>
            <FeaturedCard data={data} index={index} fade={fade} flip={flip} />
            <PlayButtonWrapper>
              <LinkButton
                onClick={() =>
                  window.open(`${data[0].featured[index].github}`, "_blank")
                }
              >
                <GithubOutline />
              </LinkButton>
              <CarouselNavWrapper>
                <NavButton onClick={() => decrementCarousel(data[0].featured)}>
                  <SkipPrevious />
                </NavButton>
                <CenterButton onClick={flipCard}>
                  <Flip />
                </CenterButton>
                <NavButton onClick={() => incrementCarousel(data[0].featured)}>
                  <SkipNext />
                </NavButton>
              </CarouselNavWrapper>
              <LinkButton
                onClick={() =>
                  window.open(`${data[0].featured[index].live}`, "_blank")
                }
              >
                <ExternalLink />
              </LinkButton>
            </PlayButtonWrapper>
          </PlayWrapper>
        </Window>
      )}
    </>
  );
};

export default Featured;

const PlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CarouselNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const CenterButton = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  color: #212529;
  background-color: #ced4da;
  padding: 8px;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  :active {
    padding: 4px;
    border-left: 4px solid #6c757d;
    border-top: 4px solid #6c757d;
    border-right: 4px solid #e9ecef;
    border-bottom: 4px solid #e9ecef;
  }
`;

const NavButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: #212529;
  background-color: #ced4da;
  padding: 4px;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  :active {
    padding: 2px;
    border-left: 4px solid #6c757d;
    border-top: 4px solid #6c757d;
    border-right: 4px solid #e9ecef;
    border-bottom: 4px solid #e9ecef;
  }
`;

const PlayButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
