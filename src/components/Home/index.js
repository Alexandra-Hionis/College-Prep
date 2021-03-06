import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

const CarouselHome = () => {
  return (
    <Carousel
      fade
      autoPlay={true}
      interval={2000}
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/background1.png"}
          alt="First slide"
        />
        <Carousel.Caption>
          <p className="carousel-caption">
            College Prep and Professional Development
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/background3.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <p className="carousel-caption">
            College Prep and Professional Development
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/background4.png"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p className="carousel-caption">
            College Prep and Professional Development
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/background5.png"}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <p className="carousel-caption">
            College Prep and Professional Development
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
