import {createAction} from '@reduxjs/toolkit';
import {City, Offers, Offer} from '../types/offers';
import {SortType} from '../const';
import {AppRoute, AuthorizationStatus} from '../const';
import {AuthUser} from '../types/user';
import {Reviews} from '../types/reviews';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<SortType>('main/changeSortType');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOffer = createAction<Offer | null>('data/loadOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('app/setError');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
export const setAuthUser = createAction<AuthUser | null>('app/setAuthUser');
export const loadNearOffers = createAction<Offers | null>('data/loadNearOffers');
export const loadComments = createAction<Reviews | null>('data/loadComments');
