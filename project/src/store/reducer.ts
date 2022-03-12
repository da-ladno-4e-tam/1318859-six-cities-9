import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from './action';
import {CITIES} from '../mocks/cities';
import {offers} from '../mocks/offers';
import {City, Offers} from '../types/offers';
import {SortType} from '../const';

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];
const DEFAULT_SORT_TYPE = SortType.Default;

const getCurrentCityOffers = (city: City): Offers => offers.filter((offer) => offer.city.name === city.name);
const getSortedOffersList = (sortType: SortType, offersList: Offers) => {
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
      return offersList;
  }
};

const initialState = {
  city: DEFAULT_CITY,
  offers: getCurrentCityOffers(DEFAULT_CITY),
  sortType: DEFAULT_SORT_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getCurrentCityOffers(action.payload);
      state.sortType = DEFAULT_SORT_TYPE;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      state.offers = getSortedOffersList(action.payload, state.offers);
    });
});

export {reducer};
