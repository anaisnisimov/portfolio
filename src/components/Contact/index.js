// import React
import React from 'react';

// import scss
import './contact.scss';
import { Icon } from 'semantic-ui-react';

// import animation aos
import AOS from 'aos';
import 'aos/src/sass/aos.scss'; // You can also use <link> for styles
import 'aos/dist/aos.css';

AOS.init();

const Contact = () => (
  <div id="contact">
    <h1
      id="contact-sectionTitle"
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >Contact
    </h1>
    <div id="contact-Container">
      <div id="contact-ContainerImage">
        <img id="contact-image" src="src/assets/images/contact_carte.png" alt="logohome" size="small" />
      </div>
      <div id="contact-ContainerInfo">
        <h3 id="contact-subtitle">+33(0)6-25-51-85-35</h3>
        <h3 id="contact-subtitle">anais.nisimov@gmail.com</h3>
        <div id="contact-ContainerShare">
          <a id="contact-linkShare" rel="noopener noreferrer" href="https://www.facebook.com/anais.nisimov" target="_blank">
            <Icon id="contact-iconShare" name="facebook official" size="large" />
          </a>
          <a id="contact-linkShare" rel="noopener noreferrer" href="https://www.linkedin.com/in/anais-nisimov/" target="_blank">
            <Icon id="contact-iconShare" name="linkedin" size="large" />
          </a>
          <a id="contact-linkShare" rel="noopener noreferrer" href="https://github.com/anaisnisimov" target="_blank">
            <Icon id="contact-iconShare" name="github square" size="large" />
          </a>
          <a id="contact-linkShare" rel="noopener noreferrer" href="https://soundcloud.com/anais-nisimov" target="_blank">
            <Icon id="contact-iconShare" name="soundcloud" size="large" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
