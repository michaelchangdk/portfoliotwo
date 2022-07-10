import React, { useRef } from "react";
import { IndexBackground } from "../styles/global";
import Header from "./section/Header";
import Tech from "./section/Tech";
import Featured from "./section/Featured";
import AllProjects from "./section/AllProjects";

const Index = () => {
  const ref = useRef(null);

  return (
    <IndexBackground ref={ref}>
      <Header constraintsRef={ref} />
      <Tech constraintsRef={ref} />
      <Featured constraintsRef={ref} />
      <AllProjects constraintsRef={ref} />
    </IndexBackground>
  );
};

export default Index;
