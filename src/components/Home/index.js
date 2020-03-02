// import React
import React from 'react';

// import scss
import './home.scss';
// import typical animation
import Typical from 'react-typical';

class Home extends React.Component {
  state = {
  }


  render() {

    return (
      <div id="home">
        <div id="home-presentation">
          <h1 id="home-title">Anaïs Nisimov</h1>
          <p id="home-paragraph">Je suis{' '}
            <Typical
              id="home-profil"
              steps={['artiste sonore et numérique', 2000, 'développeuse web Junior', 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </p>
        </div>
        <div id="home-ContainerImage">
          <img id="home-image" src="/assets/images/logoecoute1_copie.png" alt="logohome" size="small" />
        </div>
      </div>
    );
  }
}


export default Home;
