import React from 'react';
// import scss
import './caroussel.scss';
// import prop-types
import PropTypes from 'prop-types';
import GifPlayer from 'react-gif-player';

// import component bootstrap
import { Carousel } from 'react-bootstrap';

const Caroussel = ({ covergif, image, gif }) => {
  const gifImage = covergif.map(gifCoverList => gifCoverList);
  const gifAction = gif.map(gifCoverList => gifCoverList);
  
  return (
    <div id="caroussel">
      <Carousel>
        {image.map(imageList => (
          <Carousel.Item key={`${imageList}`}>
            <img
              className="d-block w-100"
              src={`${imageList}`}
              alt="First slide"
            />
          </Carousel.Item>

        ))}
      </Carousel>
      {/* <div>
        <GifPlayer gif={gifAction} still={gifImage} />
      </div> */}
    </div>
  );
};


Caroussel.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  gif: PropTypes.arrayOf(
    PropTypes.string,
  ),
  covergif: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

Caroussel.defaultProps = {
  gif: PropTypes.arrayOf(
    '',
  ),
  covergif: PropTypes.arrayOf(
    '',
  ),
};

export default Caroussel;
