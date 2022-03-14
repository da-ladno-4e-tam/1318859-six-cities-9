import {createAction} from '@reduxjs/toolkit';
import {City, Offers} from '../types/offers';
import {SortType} from '../const';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<SortType>('main/changeSortType');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('app/setError');
