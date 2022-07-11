import React from "react";
// Component Import
import Intro from "./section/Intro";
import Bio from "./section/Bio";
import Tech from "./section/Tech";
import Featured from "./section/Featured";
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
      <Featured />
      <AllProjects />
      <Contact />
    </Page>
  );
};

export default Index;
