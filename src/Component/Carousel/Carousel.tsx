import React, { useState } from 'react';
import Slider from 'react-slick';
import Card, { ICard } from "./Card";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Import your custom styles

const Carousel = (props: { details: ICard[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
    cssEase: 'linear',
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setHoveredIndex(null), // Reset hovered index when changing slides
    responsive: responsiveSettings,
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    settings.autoplay = false; // Stop autoplay when hovering over an item
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    settings.autoplay = true; // Resume autoplay when leaving the item
  };

  return (
    <div className="w-full bg-[#ffffff] via-text from-colorid7e810469">
      <Slider {...settings}>
        {props.details.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Card item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
