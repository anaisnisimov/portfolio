import React from 'react';
import './cartel.scss';
import PropTypes from 'prop-types';

const Cartel = ({
  title,
  location,
  yearOfExibition,
  yearOfCreation,
  type,
  size,
  material,
  link,
  interpretation,
  description,
}) => (
  <div id="cartel">
    <div id="cartel-container">
      <h1 id="cartel-title">{title}</h1>
      <h3 id="cartel-location">{location}<span id="cartel-locationDate">{yearOfExibition}</span></h3>
      <p id="cartel-infos">{type}</p>
      <p id="cartel-infos">{size}</p>
      <p id="cartel-infos">{material}</p>
      <ul id="cartel-list">
        {interpretation.map(interpretationList => (
          <li key={interpretationList} id="cartel-list">{interpretationList}</li>
        ))}
      </ul>
      <p id="cartel-date">{yearOfCreation}</p>

      <p id="cartel-description"><span id="cartel-spanTitle">{title}</span>{description}</p>
      <div id="cartel-containerlink">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          id="cartel-textLink"
        >
          Documentation
        </a>
      </div>
    </div>
  </div>
);
Cartel.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  yearOfExibition: PropTypes.string,
  yearOfCreation: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  material: PropTypes.string,
  link: PropTypes.string,
  interpretation: PropTypes.arrayOf(
    PropTypes.string,
  ),
  description: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

Cartel.defaultProps = {
  title: '',
  location: '',
  yearOfExibition: '',
  yearOfCreation: '',
  type: '',
  size: '',
  material: '',
  link: null,
  interpretation: PropTypes.arrayOf(
    '',
  ),
  description: PropTypes.arrayOf(
    '',
  )
};

export default Cartel;
