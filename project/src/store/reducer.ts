import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, loadOffers, requireAuthorization, setError} from './action';
import {CITIES} from '../const';
import {City, Offers} from '../types/offers';
import {SortType, AuthorizationStatus} from '../const';

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];
const DEFAULT_SORT_TYPE = SortType.Default;

const getCurrentCityOffers = (city: City, offers: Offers): Offers => offers.filter((offer) => offer.city.name === city.name);

type InitialState = {
  city: City,
  offers: Offers,
  cityOffers: Offers,
  sortType: SortType,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  cityOffers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.cityOffers = getCurrentCityOffers(action.payload, state.offers);
      state.sortType = DEFAULT_SORT_TYPE;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.cityOffers = getCurrentCityOffers(state.city, action.payload);
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
