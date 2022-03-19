import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, loadOffers, loadOffer, loadNearOffers, loadComments, requireAuthorization, setError, setAuthUser} from './action';
import {AuthorizationStatus, CITIES, SortType} from '../const';
import {City, Offer, Offers} from '../types/offers';
import {AuthUser} from '../types/user';
import {Reviews} from '../types/reviews';

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];
const DEFAULT_SORT_TYPE = SortType.Default;

const getCurrentCityOffers = (city: City, offers: Offers): Offers => offers.filter((offer) => offer.city.name === city.name);

type InitialState = {
  city: City,
  offers: Offers,
  currentOffer: Offer | null,
  currentOfferComments: Reviews | null,
  nearOffers: Offers | null,
  cityOffers: Offers,
  sortType: SortType,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
  authUser: AuthUser | null,
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentOffer: null,
  currentOfferComments: [],
  nearOffers: [],
  cityOffers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
  authUser: null,
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
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.currentOfferComments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthUser, (state, action) => {
      state.authUser = action.payload;
    });
});

export {reducer};
