import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
function FlipCard(props) {
  return (
    <Flippy
      flipOnHover={true}
      flipOnClick={false}
      flipDirection="horizontal"
      style={{
        width: props.width,
        height: props.height,
        display: "inline-block",
      }}
    >
      <FrontSide style = {props.FlipStyle}>
        {props.Front}
      </FrontSide>
      <BackSide className = 'FlipBack'>
        {props.Back}
      </BackSide>
    </Flippy>
  );
}

export default FlipCard;