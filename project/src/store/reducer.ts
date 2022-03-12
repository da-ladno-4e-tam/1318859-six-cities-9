import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';
import {CITIES} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {City, Offers} from '../types/offers';

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];

const getCurrentCityOffers = (city: City) : Offers => offers.filter((offer) => offer.city.name === city.name);

const initialState = {
  city: DEFAULT_CITY,
  offers: getCurrentCityOffers(DEFAULT_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getCurrentCityOffers(action.payload);
    });
});

export {reducer};
