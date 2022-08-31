import React, { useState } from "react";
// import { Waypoint } from "react-waypoint";
// Component Import
import Intro from "./section/Intro";
// import Pitch from "./section/Pitch";
import Bio from "./section/Bio";
import Tech from "./section/Tech";
import FeaturedProjects from "./section/FeaturedProjects";
// import AllProjects from "./section/AllProjects";
// import MoreProjects from "./section/MoreProjects";
import Contact from "./section/Contact";
// Styling Import
import { Page } from "../styles/global";

const Index = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

  // const onEnter = (props) => {
  //   console.log(props);
  //   setCurrentPosition(props.currentPosition);
  // };

  // const onLeave = (props) => {
  //   console.log(props);
  //   setCurrentPosition(props.currentPosition);
  // };

  return (
    <Page>
      <Intro />
      <Bio />
      {/* <Pitch /> */}
      <FeaturedProjects position={currentPosition} />
      {/* <AllProjects position={currentPosition} /> */}
      {/* <MoreProjects position={currentPosition} /> */}
      <Tech position={currentPosition} />
      {/* <Waypoint
        onEnter={(props) => onEnter(props)}
        onLeave={(props) => onLeave(props)}
      /> */}
      <Contact
        position={currentPosition}
        setCurrentPosition={setCurrentPosition}
      />
    </Page>
  );
};

export default Index;
