import React from 'react';
import './soundPart.scss';
import PropTypes from 'prop-types';

const SoundPart = ({ sound }) => (
  <div id="sound">
    <div id="sound-container">
      {sound.map(soundList => (
        <audio
          controls
          src={`${soundList}`}
          type="audio/mpeg"
          id="sound-art"
          key={`${soundList}`}
        >
          <track src="musicalCard" kind="captions" srcLang="en" label="english_captions" />
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      ))}
    </div>
  </div>
);

SoundPart.propTypes = {
  sound: PropTypes.arrayOf(
    PropTypes.string,
  ),
  // index: PropTypes.number.isRequired,
};

SoundPart.defaultProps = {
  sound: PropTypes.arrayOf(
    '',
  ),
};

export default SoundPart;
