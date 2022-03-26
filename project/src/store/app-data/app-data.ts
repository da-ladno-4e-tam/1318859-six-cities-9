import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, CITIES, SortType} from '../../const';
import {AppData} from '../../types/state';
import {City, Offers} from '../../types/offers';

const DEFAULT_CITY = CITIES.filter((city) => city.name === 'Paris')[0];
const DEFAULT_SORT_TYPE = SortType.Default;

const getCurrentCityOffers = (city: City, offers: Offers): Offers => offers.filter((offer) => offer.city.name === city.name);

const initialState: AppData = {
  city: DEFAULT_CITY,
  cityOffers: [],
  sortType: DEFAULT_SORT_TYPE,
  isDataLoaded: false,
  offers: [],
  currentOffer: undefined,
  nearOffers: [],
  currentOfferComments: [],
  favoriteOffers: [],
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
      state.cityOffers = getCurrentCityOffers(action.payload, state.offers);
      state.sortType = DEFAULT_SORT_TYPE;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.cityOffers = getCurrentCityOffers(state.city, action.payload);
      state.isDataLoaded = true;
    },
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    loadOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    loadNearOffers: (state, action) => {
      state.nearOffers = action.payload;
    },
    loadComments: (state, action) => {
      state.currentOfferComments = action.payload;
    },
  },
});

export const {changeCity, changeSortType, loadOffers, loadOffer, loadNearOffers, loadComments, loadFavoriteOffers} = appData.actions;

