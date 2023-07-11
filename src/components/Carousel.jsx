import React, { useState } from 'react';
import '../styles/mediacarousel.scss';

const MediaCarousel = ({ mediaList }) => {
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mediaList.length - 1 : prevIndex - 1
    );
  };

  const handleLeftMouseEnter = () => {
    setIsLeftHovered(true);
  };

  const handleLeftMouseLeave = () => {
    setIsLeftHovered(false);
  };

  const handleRightMouseEnter = () => {
    setIsRightHovered(true);
  };

  const handleRightMouseLeave = () => {
    setIsRightHovered(false);
  };

  const counterText = `${currentIndex + 1}/${mediaList.length}`;
  const mediaItem = mediaList[currentIndex];

  let mediaContent;
  if (mediaItem.type === 'image') {
    mediaContent = <img src={mediaItem.src} alt="Media" />;
  } else if (mediaItem.type === 'video') {
    mediaContent = (
      <video src={mediaItem.src} muted loop playsInline autoPlay />
    );
  }

  return (
    <div className="media-carousel">
      <div className="carousel-content">
        {mediaContent}
        <div className="carousel-controls">
          <div
            className={`carousel-control-left ${
              isLeftHovered ? 'hovered' : ''
            }`}
            onClick={handlePrev}
            onMouseEnter={handleLeftMouseEnter}
            onMouseLeave={handleLeftMouseLeave}
          >
            ⟵
          </div>
          <div
            className={`carousel-control-right ${
              isRightHovered ? 'hovered' : ''
            }`}
            onClick={handleNext}
            onMouseEnter={handleRightMouseEnter}
            onMouseLeave={handleRightMouseLeave}
          >
            ⟶
          </div>
        </div>
      </div>

      <div className="content-info">
        <div className="carousel-caption">{mediaItem.caption}</div>
        <div className="carousel-counter">{counterText}</div>
      </div>
    </div>
  );
};

export default MediaCarousel;
