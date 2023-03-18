import React from "react";
import "./slider.styles.css";
import { useState } from "react";

export const SliderCarouselItem = ({ children, width }) => {
  return <div className="slider-carousel-item">{children}</div>;
};

export const SliderCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="slider-carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="slider-btn-wrapper">
        <div className="slider-btn-container">
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            &#8249;
          </button>
          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};
export default SliderCarousel;
