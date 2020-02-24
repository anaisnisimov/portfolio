import React from 'react';
import './section.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';

// import component
import PerfectScrollbar from 'react-perfect-scrollbar';
import SectionToggleButton from 'src/components/SectionToggleButton';
import Caroussel from 'src/components/Section/Caroussel';
import Cartel from 'src/components/Section/Cartel';
import SoundPart from 'src/components/Section/SoundPart';
import VideoPart from 'src/components/Section/VideoPart';


class Section extends React.Component {
  state = {

  }

  render() {
    return (
      <div id="section">
        <PerfectScrollbar>
          <div id="section-container">
            <SectionToggleButton />
            <Caroussel />
            <Cartel />
            <SoundPart />
            <VideoPart />

          </div>
        </PerfectScrollbar>
      </div>

    );
  }
}



export default Section;
