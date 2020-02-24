import React from 'react';
// import scss
import './web.scss';
import PropTypes from 'prop-types';


class Web extends React.Component {
  state = {
    sectionOpen: false,
  }

  sectionToggleClickHandler = () => {
    this.setState(prevState => ({ sectionOpen: !prevState.sectionOpen }));
  }

  render() {
    const { sectionToggleClickHandler } = this.props;
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
          <div id="web-ContainerImage">
            <img
              id="web-image"
              src="src/assets/images/musicalcard.jpg"
              alt="ArtPicture"
            />
            <div id="web-overlay" onClick={sectionToggleClickHandler}>
              <h3 id="web-title">musicalcard</h3>
              <p id="web-paragraph">Editions-2017</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Web.propTypes = {
  sectionToggleClickHandler: PropTypes.func.isRequired,
};


export default Web;

// {/* const Web = () => (
//   <div id="web">
//     <h1 id="web-sectionTitle">Web</h1>
//     <div id="web-container">
//       <div id="web-ContainerImage">
//         <img
//           id="web-image"
//           src="src/assets/images/musicalcard.jpg"
//           alt="ArtPicture"
//         />
//         <NavLink exact to="/detail" id="web-overlay">
//           <h3 id="web-title">musicalcard</h3>
//           <p id="web-paragraph">Editions-2017</p>
//         </NavLink>
//       </div>

// ); */}
