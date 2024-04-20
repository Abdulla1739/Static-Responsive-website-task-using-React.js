import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imageOne from "../../assets/images/imageOne.jpg";
import imageTwo from "../../assets/images/imageTwo.jpg";
import imageThree from "../../assets/images/imageThree.jpg";

function Spotlight() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          src={imageOne}
          style={{ height: "90vh", width: "100%" }}
          alt="Spotlight one"
        />
        <imageOne text="First slide" />
        <Carousel.Caption style={{ top: "40%" }}>
          <h1>Hopebridge: Bridging Excellence in Medical Care</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={imageTwo}
          style={{ height: "90vh", width: "100%" }}
          alt="Spotlight Two"
        />
        <imageTwo text="Second slide" />
        <Carousel.Caption style={{ top: "40%" }}>
          <h1>
            Hopebridge: Your Partner in Precise Anaesthesia and Critical Care
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={imageThree}
          style={{ height: "90vh", width: "100%" }}
          alt="Spotlight Three"
        />
        <imageThree text="Third slide" />
        <Carousel.Caption style={{ top: "40%" }}>
          <h1>
            Comprehensive Anaesthesia & Critical Care Solutions Tailored for
            Excellence
          </h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Spotlight;
