import React from 'react';
import './section.scss';
import PropTypes from 'prop-types';

// scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

// import component
import SectionToggleButton from 'src/components/SectionToggleButton';
import Caroussel from 'src/components/Section/Caroussel';
import Infos from 'src/components/Section/Infos';

class Section extends React.Component {
  state = {
  }

  render() {
    // const dataWeb = this.props;
    // console.log('dans section un tableau', data[0].web);
    const { arrayOpened } = this.props;
    // console.log('arrayOpened', arrayOpened);

    return (
      <div id="section">
        <PerfectScrollbar>
          <div id="section-container">
            <SectionToggleButton />
            <Caroussel
              {...arrayOpened[0]}
            />
            <Infos
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
