import React from 'react';
// import scss
import './web.scss';
import PropTypes from 'prop-types';
// import data json
import data from 'src/data/data';
// import animation aos
import AOS from 'aos';
import 'aos/src/sass/aos.scss'; // You can also use <link> for styles
import 'aos/dist/aos.css';

AOS.init();

class Web extends React.Component {
  state = { }

  render() {
    const { sectionToggleClickHandler } = this.props;
    // console.log('un tableau json pour le web', data[0].web);

    return (
      <div id="web">
        <h1
          id="web-sectionTitle"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >Web
        </h1>
        <div id="web-container">
          {data[0].web.map(currentDataWeb => (
            <div id="web-ContainerImage" key={currentDataWeb.name} onClick={() => sectionToggleClickHandler(currentDataWeb.id, 'web')}>
              <img
                id="web-image"
                src={`${currentDataWeb.cover}`}
                alt="ArtPicture"
              />
              <div id="web-overlay">
                <h3 id="web-title">{currentDataWeb.title}</h3>
                <p id="web-paragraph">{currentDataWeb.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Web.propTypes = {
  sectionToggleClickHandler: PropTypes.func.isRequired,
};


export default Web;
