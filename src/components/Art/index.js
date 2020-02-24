import React from 'react';
// import scss
import './art.scss';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/src/sass/aos.scss'; // You can also use <link> for styles
import 'aos/dist/aos.css';

AOS.init();

class Art extends React.Component {
  state = {
    sectionOpen: false,
  }

  sectionToggleClickHandler = () => {
    this.setState(prevState => ({ sectionOpen: !prevState.sectionOpen }));
  }

  render() {
    const { sectionToggleClickHandler } = this.props;
    return (
      <div id="art">
        <h1
          id="art-sectionTitle"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
        Art
        </h1>

        <div id="art-container">
          <div id="art-ContainerImage">
            <img
              id="art-image"
              src="src/assets/images/musicalcard.jpg"
              alt="ArtPicture"
            />
            <div id="art-overlay" onClick={sectionToggleClickHandler}>
              <h3 id="art-title">musicalcard</h3>
              <p id="art-paragraph">Editions-2017</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Art.propTypes = {
  sectionToggleClickHandler: PropTypes.func.isRequired,
};

export default Art;
