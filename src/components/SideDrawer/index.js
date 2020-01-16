import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideDrawer.scss';

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
            <li><NavLink id="sideDrawer-navlink" exact to="/">Accueil</NavLink></li>
            <li><NavLink id="sideDrawer-navlink" exact to="/art">Art</NavLink></li>
            <li><NavLink id="sideDrawer-navlink" exact to="/web">web</NavLink></li>
            <li><NavLink id="sideDrawer-navlink" exact to="/cv">cv</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default SideDrawer;
