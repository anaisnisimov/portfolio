// == Import : npm
import React from 'react';
// import router
// import { Route, Switch, Redirect } from 'react-router-dom';

// // import components
// import Navbar from 'src/components/Navbar';
// import Backdrop from 'src/components/Backdrop';
// import SideDrawer from 'src/components/SideDrawer';
// import Home from 'src/components/Home';
// import Art from 'src/components/Art';
// import Web from 'src/components/Web';
// import About from 'src/components/About';
// import Contact from 'src/components/Contact';
// import Footer from 'src/components/Footer';
// import Section from 'src/components/Section';
// import SectionToggleButton from 'src/components/SectionToggleButton';



// import components
import Navbar from 'src/components/Navbar';
import Backdrop from 'src/components/Backdrop';
import BackdropSection from 'src/components/BackdropSection';
import SideDrawer from 'src/components/SideDrawer';
import Home from 'src/components/Home';
import Art from 'src/components/Art';
import Web from 'src/components/Web';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Section from 'src/components/Section';
import SectionArt from 'src/components/SectionArt';
import SectionToggleButton from 'src/components/SectionToggleButton';

// == Import : local
import './app.scss';

// import data json
import data from 'src/data/data';

// == Composant
class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    sectionOpen: '',
    cat: '',
  };

  // function to change the state of the click of the navbar
  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };


  // function to change the state of the buttonclose of section article (art and web)
  sectionToggleClickHandler = (id, cat) => {
    const tempFilter = cat === 'web'
      ? data[0].web.filter(currentData => currentData.id === id)
      : data[0].art.filter(currentData => currentData.id === id);
    // const tempFilter = data[0].cat.filter(currentData => currentData.id === id);
    this.setState(() => ({ sectionOpen: tempFilter, cat }));
  }

  buttonCloseClickHandler = () => {
    this.setState({ sectionOpen: '', cat: '' });
  };

  backdropClickHandlerSection = () => {
    this.setState({ sectionOpen: '', cat: '' });
  };

  render() {
    const { sideDrawerOpen, sectionOpen, cat } = this.state;

    let backdrop;
    let sideDrawer;
    let sectionClose;
    let sectionToggleButton;
    let backdropSection;
    // condition for responsive navbar
    if (sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop clickClose={this.backdropClickHandler} />;
    }

    // condition for article section art and web
    if (sectionOpen !== '') {
      sectionClose = <SectionToggleButton clickClose={this.buttonCloseClickHandler} />;
      backdropSection = <BackdropSection clickCloseBackdrop={this.backdropClickHandlerSection} />;
      if (cat === 'web') {
        sectionToggleButton = <Section cat={cat} arrayOpened={sectionOpen} clickClose={this.buttonCloseClickHandler} clickCloseBackdrop={this.backdropClickHandlerSection}  />;
      }
      else {
        sectionToggleButton = <SectionArt cat={cat} arrayOpened={sectionOpen} clickClose={this.buttonCloseClickHandler} clickCloseBackdrop={this.backdropClickHandlerSection} />;
      }
    }

    return (
      <div id="app" style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ Top: '300px' }}>
          <div>
            <section id="home">
              <Home />
            </section>
            <section id="art">
              <Art sectionToggleClickHandler={this.sectionToggleClickHandler} />
              {sectionClose}
              {sectionToggleButton}
              {backdropSection}
            </section>
            <section id="web">
              <Web sectionToggleClickHandler={this.sectionToggleClickHandler} />
              {sectionClose}
              {sectionToggleButton}
              {backdropSection}

            </section>
            <section id="apropros">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

// == Export
export default App;
