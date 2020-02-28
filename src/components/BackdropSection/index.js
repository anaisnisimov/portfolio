import React from 'react';
import propTypes from 'prop-types';
import './backdropSection.scss';

const Backdrop = ({ clickCloseBackdrop }) => (

  <div id="backdropSection" onClick={clickCloseBackdrop} />
);

Backdrop.propTypes = {
  clickCloseBackdrop: propTypes.func.isRequired,
};
export default Backdrop;
