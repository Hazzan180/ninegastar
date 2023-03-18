import "./carousel.syles.css";

export const Carousel = ({ children, title }) => {
  return (
    <>
      <div className="carousel-wrapper">
        <h3 className="h">{title}</h3>
        <div className="carousel-item-container">{children}</div>
      </div>
    </>
  );
};
