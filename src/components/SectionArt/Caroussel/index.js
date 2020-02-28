import React from 'react';
// import scss
import './caroussel.scss';
// import prop-types
import PropTypes from 'prop-types';

// import component bootstrap
import { Carousel } from 'react-bootstrap';

const Caroussel = ({ image }) => (
  <div id="caroussel">
    <Carousel>
      {image.map(imageList => (
        <Carousel.Item key={`${imageList}`}>
          <img
            className="d-block w-100"
            src={`${imageList}`}
            alt="First slide"
            id="caroussel-image"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

Caroussel.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Caroussel;
