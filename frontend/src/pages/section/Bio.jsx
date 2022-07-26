import React from "react";
import { Waypoint } from "react-waypoint";
import { useAnimation } from "framer-motion";
import {
  SectionWrapper,
  PageWrapper,
  KronaH2,
  SpaceP,
} from "../../styles/global";
import { FetchSection } from "../../services/clientFunctions";

const query = `*[_type == "bio" && !(_id in path('drafts.**'))]`;

const Bio = () => {
  const colorControls = useAnimation();
  const [loading, data] = FetchSection(query);

  const section = {
    initial: { backgroundColor: "#000000", transition: { duration: 1 } },
    visible: { backgroundColor: "#ffffff", transition: { duration: 1 } },
  };

  const text = {
    initial: { color: "#ffffff", transition: { duration: 1 } },
    visible: { color: "#000000", transition: { duration: 1 } },
  };

  const onEnter = (props) => {
    console.log("onenter", props);
    colorControls.start("initial");
  };

  const onLeave = (props) => {
    console.log("onleave", props);

    if (props.currentPosition === "above") {
      colorControls.start("visible");
    }
  };

  console.log(loading, data);

  return (
    <>
      <SectionWrapper
        initial="initial"
        variants={section}
        animate={colorControls}
      >
        <Waypoint
          onEnter={(props) => onEnter(props)}
          onLeave={(props) => onLeave(props)}
        />
        <PageWrapper style={{ marginTop: "120px" }}>
          {!loading && (
            <>
              <KronaH2
                initial="initial"
                variants={text}
                animate={colorControls}
              >
                {data[0].title}
              </KronaH2>
              {data[0].about.map((item, i) => (
                <SpaceP
                  key={i}
                  initial="initial"
                  variants={text}
                  animate={colorControls}
                >
                  {item}
                </SpaceP>
              ))}
            </>
          )}
        </PageWrapper>
      </SectionWrapper>
    </>
  );
};

export default Bio;
