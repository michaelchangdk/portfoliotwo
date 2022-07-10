import React from "react";
// Component Import
import Intro from "./section/Intro";
import Bio from "./section/Bio";
import Tech from "./section/Tech";
import Featured from "./section/Featured";
// Styling Import
import { PageWrapper } from "../styles/global";

const Index = () => {
  return (
    <PageWrapper>
      <Intro />
      <Bio />
      <Tech />
      <Featured />
    </PageWrapper>
  );
};

export default Index;
