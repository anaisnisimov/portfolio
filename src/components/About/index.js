// import React
import React from 'react';

// import scss
import './about.scss';

// import animation aos
import AOS from 'aos';
import 'aos/src/sass/aos.scss'; // You can also use <link> for styles
import 'aos/dist/aos.css';

AOS.init();

const About = () => (
  <div id="about">
    <div id="about-presentation">
      <h1
        id="about-sectionTitle"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
     À propos
      </h1>
          <p id="about-paragraph">Jeune Artiste sonore et numérique, je suis aussi développeuse web fullstack, spécialisation React. Relation Humain/Machine, Création de nouvelle imaginaire par le son, mon travail artistique se tisse peu à peu avec les métiers du numériques.</p>
          <h3 id="about-subtitle">Compétences</h3>
    </div>

    <div id="about-competences">
      <div id="about-ContainerInfoRight">
        <h4 id="about-subtitleSection">Front-end</h4>
        <ul>
          <li>HTML/CSS</li>
          <li>React/Redux</li>
          <li>JavaScript, JQuery</li>
          <li>Leaflet</li>
          <li>Semantic ui, material ui, bootstrap</li>
          <li>Ajax/Axios</li>
        </ul>
        <h4 id="about-subtitleSection">Back-end</h4>
          <ul>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Node.js</li>
            <li>PhpMyAdmin</li>
            <li>MySQL</li>
          </ul>
        <h4 id="about-subtitleSection">CMS</h4>
        <ul>
          <li>Wordpress</li>
        </ul>
        <h4 id="about-subtitleSection">Outils</h4>
        <ul>
          <li>Visual Studio, Sublime Text, Coda</li>
          <li>Git, Github</li>
          <li>Mocodo</li>
          <li>Whimsical</li>
        </ul>
      </div>

      <div id="about-ContainerInfoLeft">
        <h4 id="about-subtitleSection">Managment</h4>
        <ul>
          <li>Méthode Agile (Scrum)</li>
          <li>Trello</li>
          <li>Slack</li>
          <li>Discord</li>
        </ul>
        <h4 id="about-subtitleSection">Graphisme</h4>
        <ul>
          <li>Adobe illustrator</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Indesign</li>
        </ul>
        <h4 id="about-subtitleSection">Son/Vidéo</h4>
        <ul>
          <li>Audacity</li>
          <li>Protools</li>
          <li>Adobe Premiere</li>
        </ul>
        <h4 id="about-subtitleSection">Creative Coding</h4>
        <ul>
          <li>Processing</li>
          <li>Arduino</li>
          <li>Touch Board</li>
          <li>Pure Data</li>
        </ul>
      </div>
    </div>
    {/* <div id="about-ContainerImage">
      <img id="about-image" src="src/assets/images/logoecoute1_copie.png" alt="logohome" size="small" />
    </div> */}
  </div>
);

export default About;
