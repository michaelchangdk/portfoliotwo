import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
// Component Import
import Intro from "./section/Intro";
// import Pitch from "./section/Pitch";
import Bio from "./section/Bio";
import Tech from "./section/Tech";
import FeaturedProjects from "./section/FeaturedProjects";
import AllProjects from "./section/AllProjects";
import Contact from "./section/Contact";
// Styling Import
import { Page } from "../styles/global";

const Index = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  const onEnter = (props) => {
    setCurrentPosition(props.currentPosition);
  };

  const onLeave = (props) => {
    setCurrentPosition(props.currentPosition);
  };

  return (
    <Page>
      <Intro />
      <Bio />
      {/* <Pitch /> */}
      <FeaturedProjects />
      <AllProjects position={currentPosition} />
      <Tech position={currentPosition} />
      <Waypoint
        onEnter={(props) => onEnter(props)}
        onLeave={(props) => onLeave(props)}
      />
      <Contact position={currentPosition} />
    </Page>
  );
};

export default Index;
