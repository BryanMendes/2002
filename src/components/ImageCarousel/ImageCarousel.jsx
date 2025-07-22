import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage/LazyImage';
import './ImageCarousel.css';

function ImageCarousel({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToPrev = useCallback(() => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      if (distance > 50) {
        goToNext(); // swipe para esquerda
      } else if (distance < -50) {
        goToPrev(); // swipe para direita
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentSlide = useMemo(() => slides[currentIndex], [slides, currentIndex]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="carousel-section-container">
      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-image-frame">
              {slide.link ? (
                <Link to={slide.link} style={{textDecoration: 'none', color: 'inherit', display: 'block', width: '100%', height: '100%'}}>
                  <LazyImage
                    src={slide.imageSrc}
                    alt={slide.overlayText || ''}
                    className="carousel-image"
                  />
                  {slide.overlayText && (
                    <h3 className="carousel-image-overlay">{slide.overlayText}</h3>
                  )}
                </Link>
              ) : (
                <>
                  <LazyImage
                    src={slide.imageSrc}
                    alt={slide.overlayText || ''}
                    className="carousel-image"
                  />
                  {slide.overlayText && (
                    <h3 className="carousel-image-overlay">{slide.overlayText}</h3>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        {slides.length > 1 && (
          <button onClick={goToPrev} className="carousel-prev-button"></button>
        )}
        {slides.length > 1 && (
          <button onClick={goToNext} className="carousel-next-button"></button>
        )}
      </div>
      {currentSlide?.captionText && (
        <p className="carousel-caption">
          {currentSlide.captionText}
        </p>
      )}
      <hr className="carousel-section-separator" />
    </section>
  );
}

export default ImageCarousel;