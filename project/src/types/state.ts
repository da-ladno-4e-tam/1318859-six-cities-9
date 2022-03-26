import {store} from '../store';
import {AuthorizationStatus, SortType} from '../const';
import {City, Offer, Offers} from './offers';
import {Reviews} from './reviews';
import {AuthUser} from './user';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type AppData = {
  city: City,
  cityOffers: Offers,
  sortType: SortType,
  isDataLoaded: boolean,
  offers: Offers,
  currentOffer: Offer | null | undefined,
  nearOffers: Offers | null,
  currentOfferComments: Reviews | null,
  favoriteOffers: Offers | null,
}

export type AppProcess = {
  authUser: AuthUser | null,
  error: string,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
