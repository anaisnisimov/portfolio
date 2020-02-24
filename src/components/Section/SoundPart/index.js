import React from 'react';
import './soundPart.scss';

const SoundPart = () => (
  <div id="sound">
    <audio
      controls
      src="src/assets/sound/musicalCard/ilpo1.mp3"
      type="audio/mpeg"
      id="sound-art"
    >
      <track src="musicalCard" kind="captions" srcLang="en" label="english_captions" />
      Your browser does not support the
      <code>audio</code> element.
    </audio>

  </div>
);

export default SoundPart;
