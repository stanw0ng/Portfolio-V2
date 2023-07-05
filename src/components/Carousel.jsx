import React, { useState } from 'react';
import '../styles/mediacarousel.scss'

const MediaCarousel = ({ mediaList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="media-carousel">
      <div className="carousel-content">
        <img src={mediaList[currentIndex]} alt="Media" />
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default MediaCarousel;
