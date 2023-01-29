import React, { Component } from "react";
import "./PhotoGallery.css";

const PhotoGallery = (props) => {
  const arrayOfImages = props;

  const howMany = () => {
    if (arrayOfImages.data.length === 1) {
      return "oneImage";
    }
    if (arrayOfImages.data.length === 2) {
      return "twoImages";
    }
    if (arrayOfImages.data.length === 3) {
      return "threeImages";
    }
    if (arrayOfImages.data.length === 4) {
      return "fourImages";
    }
    if (arrayOfImages.data.length > 4) {
      return "moreThanFour";
    }
  };

  const { data } = arrayOfImages; //array of photos passed as prop
  return (
    <div className="post-image-container">
      <div className="gallery">
        {data.map((image, i) => (
          <div className={`${howMany()}${i}`}>
            <div className="image-overlay"></div>

            {i < 3 && (
              <img
                className="gallery_image"
                src={image}
                alt={`${howMany()}${i}`}
              />
            )}

            {arrayOfImages.data.length > 3 && i === 3 && (
              <div>
                <img
                  className="gallery_image"
                  src={image}
                  alt={`${howMany()}${i}`}
                />
                <span className="number">+{data.length - 4}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

/*
const PhotoGallery = (props) => {
  const arrayOfImages = props;
  const classN = "pics";

  const howMany = () => {
    if (arrayOfImages.data.length === 1) {
      return "oneImage";
    }
    if (arrayOfImages.data.length === 2) {
      return "twoImages";
    }
    if (arrayOfImages.data.length === 3) {
      console.log("נכנססס");
      return "threeImages";
    }
    if (arrayOfImages.data.length === 4) {
      return "fourImages";
    }
    if (arrayOfImages.data.length > 4) {
      return "moreThanFour";
    }
  };
  const { photos } = props; //array of photos passed as prop
  return (
    <div className="post-image-container">
      <div className="gallery" key="same always">
        {arrayOfImages.data.map((image, i) => (
          <div className={`${howMany()}${i}`}>
            <div className="image-overlay"></div>

            {arrayOfImages.data.length > 4 && (
              <span className="number">{arrayOfImages.data.length - 4}</span>
            )}

            {i < 4 && (
              <img
                className="gallery_image"
                src={image}
                alt={`image.images ${i}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
*/
