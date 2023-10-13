import { Slide } from "react-slideshow-image";
import Card, { ICard } from "./Card";

export default function Carousel(props: { details: ICard[] }) {
  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <div className="w-full bg-[#ffffff] via-text from-colorid7e810469">
      <Slide
        autoplay={true}
        duration={600}
        transitionDuration={3500}
        responsive={responsiveSettings}
        arrows={false}
        indicators={false}
      >
        {props.details.map((item) => (
          <Card item={item} />
        ))}
      </Slide>
    </div>
  );
}
