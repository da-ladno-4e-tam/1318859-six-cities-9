import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, loadOffers, requireAuthorization, setError} from './action';
import {CITIES} from '../mocks/cities';
import {City, Offers} from '../types/offers';
import {SortType, AuthorizationStatus} from '../const';

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];
const DEFAULT_SORT_TYPE = SortType.Default;

const getCurrentCityOffers = (city: City, offers: Offers): Offers => offers.filter((offer) => offer.city.name === city.name);

const getSortedOffersList = (sortType: SortType, offersList: Offers, city: City) => {
  switch (sortType) {
    case SortType.PriceAsc:
      return offersList.sort(
        (nextOffer, currentOffer) => nextOffer.price - currentOffer.price,
      );
    case SortType.PriceDesc:
      return offersList.sort(
        (nextOffer, currentOffer) => currentOffer.price - nextOffer.price,
      );
    case SortType.RatingDesc:
      return offersList.sort(
        (nextOffer, currentOffer) => currentOffer.rating - nextOffer.rating,
      );
    default:
      return getCurrentCityOffers(city, offersList);
  }
};

type InitialState = {
  city: City,
  offers: Offers,
  sortType: SortType,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getCurrentCityOffers(action.payload, state.offers);
      state.sortType = DEFAULT_SORT_TYPE;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      state.offers = getSortedOffersList(action.payload, state.offers, state.city);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
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
