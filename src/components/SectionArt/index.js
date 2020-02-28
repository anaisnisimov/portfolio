import React from 'react';
import './sectionArt.scss';
import PropTypes from 'prop-types';

// scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import component
import SectionToggleButton from 'src/components/SectionToggleButton';
import Caroussel from 'src/components/SectionArt/Caroussel';
import Cartel from 'src/components/SectionArt/Cartel';
import SoundPart from 'src/components/SectionArt/SoundPart';
import VideoPart from 'src/components/SectionArt/VideoPart';


// import data json
import data from 'src/data/data';

class Section extends React.Component {
  state = {
  }

  render() {
    const { arrayOpened } = this.props;
    // console.log('dans section un tableau', data[0].art);
    // console.log('arrayOpened', arrayOpened);

    return (
      <div id="sectionArt">
        <PerfectScrollbar>
          <div id="sectionArt-container">
            <SectionToggleButton />
            <Caroussel
              {...arrayOpened[0]}
            />
            <Cartel
              {...arrayOpened[0]}
            />
            <SoundPart
              {...arrayOpened[0]}
            />
            <VideoPart
              {...arrayOpened[0]}
            />
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}
Section.propTypes = {
  arrayOpened: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Section;
