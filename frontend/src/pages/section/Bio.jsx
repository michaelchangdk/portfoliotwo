import React from "react";
import Window from "../../components/Window";
import { P } from "../../styles/global";

const Bio = (constraintsRef) => {
  return (
    <Window title="About me" navcolor="blue" constraintsRef={constraintsRef}>
      <P>This is about me text. Testing testing.</P>
    </Window>
  );
};

export default Bio;
