import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_TO_STAY: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesToStay={Setting.PLACES_TO_STAY}
    />
  </React.StrictMode>,
  document.getElementById('root'));
