import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  PLACES_TO_STAY: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesToStay={Setting.PLACES_TO_STAY}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
