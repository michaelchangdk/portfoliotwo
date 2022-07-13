import styled from "styled-components/macro";
import { motion } from "framer-motion";

// Typographies
export const H1 = styled(motion.h1)`
  font-family: "Inter", sans-serif;
  font-weight: ${(props) => props.weight || "700"};
  font-size: ${(props) => props.size || "1.5rem"};
  line-height: 2;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const BhostraH1 = styled(motion.h1)`
  font-family: "BhostraLalaExtraBold";
  font-size: 6rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};

  @media (min-width: 768px) {
    font-size: 7rem;
  }
`;

export const KronaH1 = styled(motion.h1)`
  font-family: "Krona One", sans-serif;
  font-weight: ${(props) => props.weight || "700"};
  font-size: ${(props) => props.size || "1.5rem"};
  line-height: 2;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const H2 = styled(motion.h2)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const BhostraH2 = styled(motion.h2)`
  font-family: "BhostraLalaExtraBold";
  font-weight: 700;
  font-size: ${(props) => props.size || "4rem"};
  line-height: 1;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const KronaH2 = styled(motion.h2)`
  font-family: "Krona One", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const BlackOpsH2 = styled(motion.h2)`
  font-family: "Black Ops One", cursive;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const BungeeH2 = styled(motion.h2)`
  font-family: "Bungee", cursive;
  font-weight: 400;
  font-size: ${(props) => props.size || "1.75rem"};
  line-height: 2;
  letter-spacing: 0.2rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const H3 = styled(motion.h3)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const H4 = styled(motion.h4)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
`;

export const P = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  line-height: 1.75;
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
  font-weight: ${(props) => props.weight || "normal"};
`;

export const SpaceP = styled(motion.p)`
  font-family: "Space Grotesk", sans-serif;
  line-height: 1.75;
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "black"};
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0"};
  font-weight: ${(props) => props.weight || "normal"};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const TagSpan = styled(motion.div)`
  background-color: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.75;
  font-weight: 500;
  margin: 4px 8px;
  display: inline-block;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// Containers
export const Page = styled.main`
  width: 100vw;
  overflow: hidden;
`;

export const PageWrapper = styled.div`
  position: ${(props) => props.position || "absolute"};
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled(motion.section)`
  min-height: 100vh;
  height: 100%;
  /* min-height: --webkit-fill-available; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  position: relative;
  /* overflow: hidden; */

  :nth-of-type(odd) {
    background-color: black;
  }

  :nth-of-type(even) {
    background-color: white;
  }
`;

export const DownButton = styled(motion.button)`
  margin-top: 40px;
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  bottom: 10vh;

  @media (min-width: 768px) {
    bottom: 0;
  }
`;

// Bio Section
export const BioWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 24px;
  padding: 16px;
  border: 4px solid white;
  background-color: rgba(255, 255, 255, 0.4);

  @media (min-width: 768px) {
    gap: 48px;
    grid-template-columns: 1fr 0.4fr;
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const ProfileImage = styled(motion.img)`
  width: 100%;
  /* border-radius: 50%;
  border: 4px solid white; */
  filter: grayscale(60%);
  position: absolute;
  width: 180px;
  height: 180px;
  bottom: -12px;
  right: -12px;
  clip-path: polygon(60% 0, 100% 40%, 85% 80%, 0 100%, 20% 15%);

  @media (min-width: 768px) {
    position: absolute;
    width: 260px;
    height: 260px;
    top: -20px;
    right: -20px;
  }
`;

// Accordion Component
export const AccordionHeader = styled(motion.header)`
  /* width: 300px;
  height: 80px; */
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  cursor: pointer;
  gap: 8px;
  @media (min-width: 768px) {
    padding: 24px 0;
  }
`;

export const AccordionIcon = styled(motion.img)`
  width: 20px;
  height: 20px;
`;
