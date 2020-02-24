// == Import : npm
import React from 'react';
// import router
// import { Route, Switch, Redirect } from 'react-router-dom';

// import components
import Navbar from 'src/components/Navbar';
import Backdrop from 'src/components/Backdrop';
import SideDrawer from 'src/components/SideDrawer';
import Home from 'src/components/Home';
import Art from 'src/components/Art';
import Web from 'src/components/Web';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';
import Section from 'src/components/Section';
import SectionToggleButton from 'src/components/SectionToggleButton';



// == Import : local
import './app.scss';

// == Composant
class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    sectionOpen: false,
  };

  // function to change the state of the click of the navbar
  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };


  // function to change the state of the buttonclose of section article (art and web)
  sectionToggleClickHandler = () => {
    this.setState(prevState => ({ sectionOpen: !prevState.sectionOpen }));
  }

  buttonCloseClickHandler = () => {
    this.setState({ sectionOpen: false });
  };

  render() {
    const { sideDrawerOpen, sectionOpen } = this.state;

    let backdrop;
    let sideDrawer;
    let sectionClose;
    let sectionToggleButton;

    if (sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop clickClose={this.backdropClickHandler} />;
    }

    if (sectionOpen) {
      sectionClose = <SectionToggleButton clickClose={this.buttonCloseClickHandler} />;
      sectionToggleButton = <Section clickClose={this.buttonCloseClickHandler} />;
    }

    return (
      <div id="app" style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ Top: '300px' }}>      
          {/* <Section /> */}
          <div>
            <section id="home">
              <Home />
            </section>
            <section id="art">
              <Art sectionToggleClickHandler={this.sectionToggleClickHandler} />
              {sectionClose}
              {sectionToggleButton}
            </section>
            <section id="web">
              <Web sectionToggleClickHandler={this.sectionToggleClickHandler} />
              {sectionClose}
              {sectionToggleButton}
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
