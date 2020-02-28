import React from 'react';
// import scss
import './art.scss';
import PropTypes from 'prop-types';
// import data json
import data from 'src/data/data';

// import animation aos
import AOS from 'aos';
import 'aos/src/sass/aos.scss'; // You can also use <link> for styles
import 'aos/dist/aos.css';

AOS.init();

class Art extends React.Component {
  state = {

  }

  render() {
    const { sectionToggleClickHandler } = this.props;
    // console.log('tableau', data[0].art[0].title);

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
          {data[0].art.map(currentDataArt => (
            <div id="art-ContainerImage" key={currentDataArt.name} onClick={() => sectionToggleClickHandler(currentDataArt.id, 'art')}>
              <img
                id="art-image"
                src={`${currentDataArt.cover}`}
                alt="ArtPicture"
              />
              <div id="art-overlay">
                <h3 id="art-title">{currentDataArt.title}</h3>
                <p id="art-paragraph">{currentDataArt.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  }
}

Art.propTypes = {
  sectionToggleClickHandler: PropTypes.func.isRequired,
};

export default Art;
