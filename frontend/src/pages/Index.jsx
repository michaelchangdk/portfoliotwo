import React from "react";
// Component Import
import Intro from "./section/Intro";
import Pitch from "./section/Pitch";
import Bio from "./section/Bio";
import Tech from "./section/Tech";
import FeaturedProjects from "./section/FeaturedProjects";
// import AllProjects from "./section/AllProjects";
// import Contact from "./section/Contact";
// Styling Import
import { Page } from "../styles/global";

const Index = () => {
  return (
    <Page>
      <Intro />
      <Pitch />
      <FeaturedProjects />
      {/* <AllProjects /> */}
      <Tech />
      <Bio />
      {/* <Contact /> */}
    </Page>
  );
};

export default Index;
