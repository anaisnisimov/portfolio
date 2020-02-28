import React from 'react';
import './infos.scss';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Infos = ({ title, year, link, skills, infoSkills, name }) => (
  <div id="infos">
    <div id="infos-container" key={name}>
      <h1 id="infos-title">Développement</h1>
      <ul>
        {infoSkills.map(infoSkill => (
          <li id="infos-description" key={infoSkill}>
            <Icon name="checkmark" size="small" />
            {infoSkill}
          </li>
        ))}
      </ul>
    </div>

    <div id="infos-containerInfos">
      <h1 id="infos-title">Informations</h1>
      <h3 id="infos-subtitle">
        <Icon name="fly" size="large" />
        Projet :
        <span id="infos-titleProject">
          {title}
        </span>
      </h3>
      <h3 id="infos-subtitle">
        <Icon name="calendar alternate" size="large" />
        Année :
        <span id="infos-subtitle">
          {year}
        </span>
      </h3>
      <h3 id="infos-subtitle">
        <Icon name="pencil alternate" size="large" />
        Langages
      </h3>
      <div id="infos-containerListSkills">
        <ul>
          {skills.map(skill => (
            <li key={skill}> <span id="infos-skills">{skill}</span></li>
          ))}
        </ul>
      </div>

      <div id="infos-containerlink">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          id="infos-textLink"
        >
        visiter le site
        </a>
      </div>
    </div>
  </div>
);

Infos.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  infoSkills: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,

};

export default Infos;
