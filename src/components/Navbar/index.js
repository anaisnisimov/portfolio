import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './navbar.scss';

class NavBar extends React.Component {
  state = {
    overlay: true,
    sideDrawerOpen: false,
  }

  // function to change the state of the logo's overlay when we hover with the mouse
  HandleHover = () => {
    this.setState({ overlay: !this.state.overlay });
    // console.log('jechange');
  }

  // function to change the state of the click of the navbar
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      // console.log('jeclique', this.state.sideDrawerOpen);
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    const { overlay } = this.state;
    const { drawerClickHandler } = this.props;
    return (

      <header id="navbar">
        <nav id="navbar-navigation">
          <div>
            {/* we call the function click inside the component DrawerToggleButton */}
            <DrawerToggleButton click={drawerClickHandler} />
          </div>
          <div id="navbar-logo">
            <NavLink id="navbar-navlink" exact to="/">
              <img
                alt="logo"
                id="navbar-navlogo"
                onMouseEnter={this.HandleHover}
                onMouseLeave={this.HandleHover}
                // src={`/assets/images/${overlay ? 'marche' : 'marche_grey'}.png`}
                src={`src/assets/images/${overlay ? 'marche' : 'marche_grey'}.png`}
              />     
            </NavLink>
          </div>
          <div id="navbar-spacer" />
          <div id="navbar-navigationItems">
            <ul>
              <li><AnchorLink offset={() => 100} id="navbar-navlink" href="#home">Accueil</AnchorLink></li>
              <li><AnchorLink offset={() => 100} id="navbar-navlink" href="#art">Art</AnchorLink></li>
              <li><AnchorLink offset={() => 100} id="navbar-navlink" href="#web">web</AnchorLink></li>
              <li><AnchorLink offset={() => 110} id="navbar-navlink" href="#apropros">À propos</AnchorLink></li>
              <li><AnchorLink offset={() => 100} id="navbar-navlink" href="#contact">Contact</AnchorLink></li>
            </ul>
          </div>
        </nav>
      </header>

    );
  }
}

NavBar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};


export default NavBar;
