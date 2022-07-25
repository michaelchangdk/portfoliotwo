import React from "react";
import styled from "styled-components";
import { PageWrapper, KronaH1, SpaceP } from "../../styles/global";

const Pitch = () => {
  return (
    <>
      <PageWrapper position="relative">
        <AboutSection>
          <KronaH1 color="white">ABOUT:</KronaH1>
          <SpaceP color="white">
            I like science fiction. I like brutalist architecture. I like video
            games.
          </SpaceP>
          <SpaceP color="white">
            I care about accessibility. I care about diversity. I care about
            sustainability.
          </SpaceP>
        </AboutSection>
      </PageWrapper>
    </>
  );
};

export default Pitch;

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
  align-items: center;
  padding: 0 0 40px 0;
`;
