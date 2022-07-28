import React from "react";
import styled from "styled-components";
import { PageWrapper, KronaH2, SpaceP } from "../../styles/global";
import { FetchSection } from "../../services/clientFunctions";
import { urlFor } from "../../client";

const query = `*[_type == "bio" && !(_id in path('drafts.**'))]`;

const Pitch = () => {
  const [loading, data] = FetchSection(query);

  console.log(loading, data);
  return (
    <>
      <PageWrapper position="relative">
        <PitchSection>
          <KronaH2 color="white" size="28px">
            天下万物生于有，有生于无。
          </KronaH2>
          <KronaH2 color="white" align="right">
            I am a frontend developer + project manager based in Copenhagen,
            Denmark. I LOVE science fiction, brutalist architecture, and video
            games. I'M PASSIONATE about accessibility and diversity.
          </KronaH2>
        </PitchSection>
        <AboutSection>
          <div>
            <SpaceP color="white">
              My name is Michael Chang, and I'm a front-end developer with a
              strong background in project management and customer service. I've
              always been interested in both technology and the arts, ever since
              I was a kid. I grew up loving science fiction novels and movies,
              as well as video games and computers. So it only seemed natural to
              me to want to combine those interests when pivoting into a new
              career.
            </SpaceP>
            <SpaceP color="white">
              Fast-forward to today, and I've just completed a 24-week long boot
              camp, where we coded a new project each week. For my final
              project, I've had the privilege of creating an e-learning platform
              for With Purpose. This organization works towards bridging the
              gender gap in the startup ecosystem in the Nordics.
            </SpaceP>
          </div>
          <ProfileImage
            src={urlFor(data[0].image.asset._ref)}
            alt="Michael Chang"
          />
        </AboutSection>
      </PageWrapper>
    </>
  );
};

export default Pitch;

const PitchSection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 0 32px 0;
  gap: 32px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid white;
  justify-self: end;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 0 32px 0;
  gap: 32px;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
  }
`;
