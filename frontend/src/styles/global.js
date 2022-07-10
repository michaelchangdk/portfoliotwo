import styled from "styled-components/macro";
import { motion } from "framer-motion";
// import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";
// import background3 from "../assets/background3.jpg";

// Background wrapper for page
export const IndexBackground = styled.div`
  /* background-image: url(${background2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 16px;
  background-color: white;
`;

// Typography
export const H1 = styled.h1`
  font-family: "Space Mono", monospace;
  font-weight: 700;
  font-size: ${(props) => props.size || "18px"};
`;

export const H2 = styled.h2`
  font-family: "Space Mono", monospace;
  font-weight: ${(props) => props.weight || "700"};
  font-size: ${(props) => props.size || "18px"};
`;

export const H3 = styled.h3`
  font-family: "Space Mono", monospace;
  font-weight: 400;
  font-size: ${(props) => props.size || "18px"};
`;

export const H2SourceCode = styled.h2`
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  font-size: ${(props) => props.size || "16px"};
`;

export const P = styled.p`
  font-family: "Prompt", sans-serif;
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "16px"};
  line-height: 1.3;
`;

// Buttons - used in Header, Featured
export const LinkButton = styled.button`
  height: 42px;
  width: 42px;
  color: #212529;
  background-color: #ced4da;
  padding: 4px;
  border-radius: 4px;
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

// Containers - used in Header, Featuredcard
export const RecessedWrapper = styled.div`
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  padding: ${(props) => props.padding || "8px"};
  border-radius: 4px;
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "column"};
  gap: ${(props) => props.gap || "0px"};
  justify-content: ${(props) => props.justifycontent || "space-around"};
  align-items: ${(props) => props.alignitems || "flex-start"};
  height: 100%;
  height: ${(props) => props.height || "auto"};
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Images - used in Header
export const FullWidthImage = styled.img`
  width: 100%;
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  border-radius: 4px;
`;

// Not being used
export const NavbarWrapper = styled.div`
  background-color: #ced4da;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 52px;
  border-top: 4px solid #e9ecef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

// Window Component
export const WindowWrapper = styled(motion.div)`
  background-color: #ced4da;
  border-left: 4px solid #e9ecef;
  border-top: 4px solid #e9ecef;
  border-right: 4px solid #6c757d;
  border-bottom: 4px solid #6c757d;
  /* width: ${(props) =>
    props.expand ? "100%" : props.minimize ? "324px" : "90%"}; */
  width: ${(props) => (props.expand ? "100%" : "90%")};
  max-width: ${(props) => (props.expand ? "100%" : "500px")};
  min-height: ${(props) => (props.expand ? "100vh" : "auto")};
  height: ${(props) => (props.expand ? "100%" : "auto")};
  /* display: ${(props) => (props.exit ? "none" : "flex")}; */
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin: 0 auto;
`;

export const WindowTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  height: 48px;
`;

export const WindowTopBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-right: 16px;
`;

export const WindowTopBarRight = styled.div`
  display: flex;
  gap: 4px;
`;

export const WindowContent = styled(motion.div)`
  display: ${(props) => (props.minimize ? "none" : "block")};
  padding: 8px;
`;

export const RaisedWindowButton = styled.button`
  background-color: #ced4da;
  border-left: ${(props) =>
    props.enabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
  border-top: ${(props) =>
    props.enabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
  border-right: ${(props) =>
    props.enabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
  border-bottom: ${(props) =>
    props.enabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-family: "Space Mono", monospace;
  font-weight: 700;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  color: black;

  :active {
    border-left: ${(props) =>
      props.disabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
    border-top: ${(props) =>
      props.disabled ? "4px solid #e9ecef" : "4px solid #6c757d"};
    border-right: ${(props) =>
      props.disabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
    border-bottom: ${(props) =>
      props.disabled ? "4px solid #6c757d" : "4px solid #e9ecef"};
  }
`;

// Accordion Tree Component
export const TreeHeader = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
`;

export const TreeButton = styled.button`
  border: 1.5px solid black;
  height: 20px;
  width: 20px;
  color: black;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
`;

export const TreeIcon = styled.div`
  border: 1.5px solid #6c757d;
  height: 20px;
  width: 20px;
  color: #6c757d;
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TreeBody = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  padding-left: 16px;
  border-left: 1.5px solid black;
`;

// Bio Section
export const ContactCard = styled.div`
  display: grid;
  gap: 8px;
  max-width: 900px;
  margin: 0 auto;

  /* @media (min-width: 600px) {
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: auto auto;
  } */
`;

export const ContactTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  /* @media (min-width: 600px) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 2;
  } */
`;

export const ContactSocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-left: 4px solid #6c757d;
  border-top: 4px solid #6c757d;
  border-right: 4px solid #e9ecef;
  border-bottom: 4px solid #e9ecef;
  border-radius: 4px;
  max-height: 66px;

  /* @media (min-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
  } */
`;
