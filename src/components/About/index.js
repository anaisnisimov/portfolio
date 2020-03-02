// import React
import React from 'react';

// import scss
import './about.scss';

// import propTypes
import PropTypes from 'prop-types';

// import animation aos
import AOS from 'aos';
import 'aos/src/sass/aos.scss'; // You can also use <link> for styles
import 'aos/dist/aos.css';

AOS.init();

const About = ({
  title,
  subtitle,
  titleSection,
  image,
  description,
  front,
  back,
  cms,
  tools,
  managment,
  graphism,
  videoSound,
  creativeCoding,
}) => (
  <div id="about">
    <h1
      id="about-sectionTitle"
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      {title}
    </h1>

    <div id="about-presentationContainer">
      <div id="about-ContainerImage">
        <img id="about-image" src={`${image}`} alt="logohome" />
      </div>
      <div id="about-description">
        <p id="about-paragraph">{description}</p>
      </div>
    </div>


    <div id="about-competences">
    <h3 id="about-subtitle">{subtitle}</h3>
        <h4 id="about-subtitleSection">{titleSection[0]}</h4>
        <ul id="about-ulSection">
          {front.map(frontList => (
            <li id="about-listSection" key={frontList}>{frontList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[1]}</h4>
        <ul id="about-ulSection">
          {back.map(backList => (
            <li id="about-listSection" key={backList}>{backList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[2]}</h4>
        <ul id="about-ulSection">
          {cms.map(cmsList => (
            <li id="about-listSection" key={cmsList}>{cmsList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[3]}</h4>
        <ul id="about-ulSection">
          {tools.map(toolsList => (
            <li id="about-listSection" key={toolsList}>{toolsList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[4]}</h4>
        <ul id="about-ulSection">
          {managment.map(managmentList => (
            <li id="about-listSection" key={managmentList}>{managmentList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[5]}</h4>
        <ul id="about-ulSection">
          {graphism.map(graphismList => (
            <li id="about-listSection" key={graphismList}>{graphismList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[6]}</h4>
        <ul id="about-ulSection">
          {videoSound.map(videoSoundList => (
            <li id="about-listSection" key={videoSoundList}>{videoSoundList}</li>
          ))}
        </ul>
        <h4 id="about-subtitleSection">{titleSection[7]}</h4>
        <ul id="about-ulSection">
          {creativeCoding.map(creativeCodingList => (
            <li id="about-listSection" key={creativeCodingList}>{creativeCodingList}</li>
          ))}
        </ul>
    </div>
  </div>
);


About.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  titleSection: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  description: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  front: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  back: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  cms: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  managment: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  graphism: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  videoSound: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  creativeCoding: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
export default About;
