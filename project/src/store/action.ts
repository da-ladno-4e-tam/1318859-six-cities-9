import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/offers';
import {SortType} from '../const';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<SortType>('main/changeSortType');
