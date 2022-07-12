import React from "react";
// Component Import
import Intro from "./section/Intro";
import Bio from "./section/Bio";
import Tech from "./section/Tech";
import FeaturedProjects from "./section/FeaturedProjects";
import AllProjects from "./section/AllProjects";
import Contact from "./section/Contact";
// Styling Import
import { Page } from "../styles/global";

const Index = () => {
  return (
    <Page>
      <Intro />
      <Bio />
      <Tech />
      <FeaturedProjects />
      <AllProjects />
      <Contact />
    </Page>
  );
};

export default Index;
