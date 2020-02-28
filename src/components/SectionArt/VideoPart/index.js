import React from 'react';
import './videoPart.scss';
import PropTypes from 'prop-types';

const VideoPart = ({ video }) => (
  <div id="video">
    {video.map(videoList => (
        <video width="750" height="500" controls key={`${videoList}`}>
          <source src={`${videoList}`} type="video/mp4" />
          <track src="fin_the_door" kind="captions" srcLang="en" label="english_captions" />
        </video>
    ))}
  </div>
);

VideoPart.propTypes = {
  video: PropTypes.arrayOf(
    PropTypes.string,
  ),

};

VideoPart.defaultProps = {
  video: PropTypes.arrayOf(
    '',
  ),
};
export default VideoPart;
