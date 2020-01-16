import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer id="footer">
    <nav id="footer-navigation">
      <div id="footer-navigationItems">
        <ul>
          <li> <NavLink id="footer-navlink" exact to="/Àpropros">À propos</NavLink></li>
          <li><NavLink id="footer-navlink" exact to="/Contact">Contact</NavLink></li>
          <li><NavLink id="footer-navlink" exact to="/MentionsLégales">Mentions Légales</NavLink></li>
          <li><NavLink id="footer-navlink" exact to="/Partagez">Partagez</NavLink></li>
        </ul>
      </div>
    </nav>
  </footer>

);

export default Footer;
