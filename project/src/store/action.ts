import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/offers';

export const changeCity = createAction<City>('main/changeCity');
