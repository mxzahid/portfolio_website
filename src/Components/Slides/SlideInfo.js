import React from "react";
import { useSpring, animated } from "react-spring";

function SlideInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  if(props.whichSlide === 0) { 
  return (
    <animated.div className="a-slide-info" style={style}>
      <p className="a-slide-header">{props.mainHeader}</p>
      <p className="a-slide-sub-header">{props.subHeader}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        Click for more!
      </a>
    </animated.div>
  );
  } else {
  return (
    <animated.div className="a-slide-info" style={style}>
      <p className="a-slide-header">{props.mainHeader}</p>
      <p className="a-slide-sub-header">{props.subHeader}</p>
      <a href={props.link} target="_self" rel="noopener noreferrer">
        Click for more!
      </a>
    </animated.div>
  );
  }
}

export default SlideInfo;
