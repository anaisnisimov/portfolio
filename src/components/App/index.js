// == Import : npm
import React from 'react';
// import router
// import { Route, Switch, Redirect } from 'react-router-dom';

// import components
import Navbar from 'src/components/Navbar';
import Backdrop from 'src/components/Backdrop';
import SideDrawer from 'src/components/SideDrawer';
import Footer from 'src/components/Footer';

// == Import : local
import './app.scss';

// == Composant
class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  // function to change the state of the click of the navbar
  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;
    // const { isAuthenticated, message } = this.props;

    let backdrop;
    let sideDrawer;
    if (sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop clickClose={this.backdropClickHandler} />;
    }
    return (
      <div id="app" style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ Top: '300px' }}>
          <div>
          hello
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}


// == Export
export default App;
