import React from 'react';
import propTypes from 'prop-types';
import './drawerToggleButton.scss';
// we passed the props function of click, who are in the navbar component
// with the function drawerToggleClickHandler
const DrawerToggleButton = ({ click }) => (
  <button id="toggleButton" onClick={click} type="button">
    <div id="toggleButton-line" />
    <div id="toggleButton-line" />
    <div id="toggleButton-line" />
  </button>
);

DrawerToggleButton.propTypes = {
  click: propTypes.func.isRequired,
};

export default DrawerToggleButton;
