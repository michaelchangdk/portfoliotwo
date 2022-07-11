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
export const PageWrapper = styled.main`
  width: 900px;
  margin: 0 auto;
`;

export const SectionWrapper = styled(motion.section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0;
  position: relative;
`;

export const SvgButton = styled(motion.button)`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  background: transparent;
  border: none;
`;
