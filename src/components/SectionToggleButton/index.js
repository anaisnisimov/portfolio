import React from 'react';
import propTypes from 'prop-types';
import './sectionToggleButton.scss';
import { Icon } from 'semantic-ui-react';

// we passed the props function of click, who are in the navbar component
// with the function buttonToggleClickHandler
const SectionToggleButton = ({ clickClose }) => (
  <button id="sectionToggleButton" type="button">
    <Icon id="sectionToggleButton-icon" link name="close" onClick={clickClose} size="large" hover="this.style.color='grey'" />
  </button>
);

SectionToggleButton.propTypes = {
  clickClose: propTypes.func.isRequired,
};

export default SectionToggleButton;
