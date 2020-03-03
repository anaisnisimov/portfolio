import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideDrawer.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class SideDrawer extends React.Component {
  state = {
    overlay: true,
  }

  // function to change the state of the logo's overlay when we hover with the mouse
  HandleHover = () => {
    this.setState({ overlay: !this.state.overlay });
    console.log('jechange');
  }

  render() {
    const { overlay } = this.state;
    return (
      <nav id="sideDrawer">
        <div id="sideDrawer-logo">
          <NavLink id="sideDrawer-navlink" exact to="/">
            <img
              alt="logo"
              id="sideDrawer-navlogo"
              onMouseEnter={this.HandleHover}
              onMouseLeave={this.HandleHover}
              // src={`/assets/images/${overlay ? 'marche' : 'marche_grey'}.png`}
              src={`src/assets/images/${overlay ? 'marche' : 'marche_grey'}.png`}
            />
          </NavLink>
        </div>
        <div id="sideDrawer-navigation">
          <ul>
            <li><AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#home">Accueil</AnchorLink></li>
            <li><AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#art">Art</AnchorLink></li>
            <li><AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#web">web</AnchorLink></li>
            <li><AnchorLink offset={() => 110} id="sideDrawer-navlink" href="#apropros">À propos</AnchorLink></li>
            <li><AnchorLink offset={() => 100} id="sideDrawer-navlink" href="#contact">Contact</AnchorLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default SideDrawer;
