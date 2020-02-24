// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


// import react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// == Import : local
import App from 'src/components/App';

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
