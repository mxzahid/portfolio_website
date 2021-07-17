import React from "react";
import SlideInfo from "./SlideInfo";

function Slide(props) {
  return (
    <div
      className="a-slide"
      onClick={(e) => props.click(props.item)}
    >
      
      <img
        className="a-slide-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {
        !(props.item.selected) && 
        <h3>{props.item.imageText}</h3>
      }
      {props.item.selected && (
        <SlideInfo
          style={{ color: "#C5C1C0" }}
          mainHeader={props.item.mainHeader}
          subHeader={props.item.subHeader}
          link={props.item.link}
          whichSlide = {props.item.id}
        />
      )}
    </div>
  );
}

export default Slide;
