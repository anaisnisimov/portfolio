import React from 'react';
import './videoPart.scss';

const VideoPart = () => (
  <div id="video">
    <video width="750" height="500" controls >
      <source src="src/assets/video/findthedoor/findthedoor_documentation_expo.mp4" type="video/mp4" />
      <track src="fin_the_door" kind="captions" srcLang="en" label="english_captions" />
    </video>
  </div>
);

export default VideoPart;
