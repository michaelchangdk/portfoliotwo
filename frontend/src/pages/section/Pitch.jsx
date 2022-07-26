import React from "react";
import styled from "styled-components";
import { PageWrapper, KronaH1 } from "../../styles/global";

const Pitch = () => {
  return (
    <>
      <PageWrapper position="relative">
        <AboutSection>
          <KronaH1 color="white" size="28px">
            天下万物生于有，有生于无。
          </KronaH1>
          <KronaH1 color="white" align="right">
            COPENHAGEN BASED. Raised internationally. I LOVE science fiction,
            brutalist architecture, and video games. I'M PASSIONATE about
            accessibility, diversity, and inclusion.
          </KronaH1>
        </AboutSection>
      </PageWrapper>
    </>
  );
};

export default Pitch;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 0 40px 0;
  gap: 32px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }
`;
