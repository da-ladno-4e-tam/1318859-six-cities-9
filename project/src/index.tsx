import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const Setting = {
  PLACES_TO_STAY: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesToStay={Setting.PLACES_TO_STAY}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
