//פעיל
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const PhotoCarousel = (props) => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const arrayOfImages = props;

  console.log(arrayOfImages.data);

  useEffect(() => {
    if (arrayOfImages.data.length === 3) {
      setSlidesToShow(1);
    } else if (arrayOfImages.data?.length > 3) {
      setSlidesToShow(3);
    }
  }, [arrayOfImages.length]);

  return (
    <Carousel>
      {arrayOfImages.data?.slice(0, slidesToShow).map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={photo}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
