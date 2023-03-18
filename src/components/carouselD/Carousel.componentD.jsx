import "./carousel.sylesD.css";

export const Carousel = ({ children, title }) => {
  return (
    <>
      <div className="carousel-wrapper">
        <h3 className="header">{title}</h3>
        <div className="carousel-item-container">{children}</div>
      </div>
    </>
  );
};
