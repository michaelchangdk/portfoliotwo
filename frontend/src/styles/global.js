import styled from "styled-components/macro";
import { motion } from "framer-motion";

// Typographies
export const H1 = styled(motion.h1)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2;
  letter-spacing: 0.2rem;
`;

export const H2 = styled(motion.h2)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 2;
  letter-spacing: 0.2rem;
`;

export const H3 = styled(motion.h3)`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
`;

export const P = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  line-height: 1.75;
  font-size: ${(props) => props.size || "16px"};
`;

// Containers
export const Page = styled.main`
  width: 100vw;
`;

export const PageWrapper = styled.main`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 900px;
    margin: 0 auto;
  }
`;

export const SectionWrapper = styled(motion.section)`
  min-height: 100vh;
  min-height: --webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  position: relative;

  :nth-of-type(odd) {
    background-color: black;
  }
`;

export const SvgButton = styled(motion.button)`
  margin-top: 40px;
  cursor: pointer;
  background: transparent;
  border: none;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
  }
`;
