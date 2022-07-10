import React, { useState } from "react";
// Styling Imports
import styled from "styled-components/macro";
import {
  H1,
  WindowWrapper,
  WindowTopBar,
  WindowTopBarLeft,
  WindowTopBarRight,
  WindowContent,
  RaisedWindowButton,
} from "../styles/global";
// Function Imports
// import { useWindowSize } from "../helpers/hooks";

const Window = (props) => {
  const [close, setClose] = useState(false);
  const [expand, setExpand] = useState(false);
  const [minimize, setMinimize] = useState(false);
  // const window = useWindowSize();

  const variants = {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0, opacity: 0 },
  };

  const handleExpand = () => {
    setExpand(!expand);
    setMinimize(false);
  };

  const handleMinimize = () => {
    setMinimize(!minimize);
    setExpand(false);
  };

  const AppIcon = styled(props.icon)`
    height: 28px;
    width: 28px;
  `;

  return (
    <WindowWrapper
      // exit={close}
      dragConstraints={props.constraintsRef.constraintsRef}
      expand={+expand}
      minimize={+minimize}
      initial="visible"
      variants={variants}
      animate={close ? "hidden" : "visible"}
      layout
      // drag={window.width > 600 ? true : false}
      // drag="y"
      transition={{ layout: { duration: 0.1 } }}
    >
      <WindowTopBar backgroundcolor={props.navcolor}>
        <WindowTopBarLeft>
          <AppIcon />
          <H1>{props.title}</H1>
        </WindowTopBarLeft>
        <WindowTopBarRight>
          <RaisedWindowButton onClick={handleMinimize} enabled={+minimize}>
            _
          </RaisedWindowButton>
          {/* Possibly Remove or conditionally render the expand button? */}
          {props.allowMaximize && (
            <RaisedWindowButton onClick={handleExpand} enabled={+expand}>
              O
            </RaisedWindowButton>
          )}
          <RaisedWindowButton onClick={() => setClose(!close)}>
            X
          </RaisedWindowButton>
        </WindowTopBarRight>
      </WindowTopBar>
      <WindowContent
        minimize={+minimize}
        expand={+expand}
        layout
        transition={{ layout: { duration: 0.1 } }}
      >
        {props.children}
      </WindowContent>
    </WindowWrapper>
  );
};

export default Window;
