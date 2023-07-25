import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Slide } from "react-slideshow-image";

export default function Slider(props: {
  children: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[];
}) {
  return (
    <Slide
      autoplay={false}
      // duration={1000}
      transitionDuration={400}
      easing="ease-in"
      nextArrow={
        <FontAwesomeIcon
          className="h-14 p-2 text-secondary"
          icon={faAngleRight}
        />
      }
      prevArrow={
        <FontAwesomeIcon
          className="h-14 p-2 text-secondary"
          icon={faAngleLeft}
        />
      }
      indicators={true}
    >
      {props.children}
    </Slide>
  );
}
