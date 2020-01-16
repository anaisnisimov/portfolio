import React from 'react';
import propTypes from 'prop-types';
import './backdrop.scss';

const Backdrop = ({ clickClose }) => (

  <div id="backdrop" onClick={clickClose} />
);

Backdrop.propTypes = {
  clickClose: propTypes.func.isRequired,
};
export default Backdrop;
