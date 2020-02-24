// import React
import React from 'react';

// import scss
import './contact.scss';
import { Icon } from 'semantic-ui-react';

const Contact = () => (
  <div id="contact">
    <h1 id="contact-sectionTitle">Contact</h1>
    <div id="contact-Container">
      <div id="contact-ContainerImage">
        <img id="contact-image" src="src/assets/images/contact_carte.png" alt="logohome" size="small" />
      </div>
      <div id="contact-ContainerInfo">
        <h3 id="contact-subtitle">+33(0)6-25-51-85-35</h3>
        <h3 id="contact-subtitle">anais.nisimov@gmail.com</h3>
      </div>
    </div>
    <div id="contact-ContainerShare">
      <a id="contact-linkShare" rel="noopener noreferrer" href="https://www.facebook.com/anais.nisimov" target="_blank">
        <Icon id="contact-iconShare" disabled name="facebook official" size="large"  />
      </a>
      <a id="contact-linkShare" rel="noopener noreferrer" href="https://www.linkedin.com/in/anais-nisimov/" target="_blank">
        <Icon id="contact-iconShare" disabled name="linkedin"  size="large" />
      </a>
      <a id="contact-linkShare" rel="noopener noreferrer" href="https://www.linkedin.com/in/anais-nisimov/" target="_blank">
        <Icon id="contact-iconShare" disabled name="github square"  size="large" />
      </a>
      <a id="contact-linkShare" rel="noopener noreferrer" href="https://soundcloud.com/anais-nisimov" target="_blank">
        <Icon id="contact-iconShare"  disabled name="soundcloud"  size="large" />
      </a>
    </div>
  </div>
);

export default Contact;
