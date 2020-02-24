import React from 'react';
// import scss
import './caroussel.scss';
// import prop-types
// import PropTypes from 'prop-types';

// import component bootstrap
import { Carousel } from 'react-bootstrap';

const Caroussel = () => (
  <div id="caroussel">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/musicalcard.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/musicalcard.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src/assets/images/musicalcard.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Caroussel;
