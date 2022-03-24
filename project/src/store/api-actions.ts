import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {Offers, Offer} from '../types/offers';
import {redirectToRoute} from './action';
import {requireAuthorization} from './user-process/user-process';
import {changeCity, changeSortType, loadOffers, loadOffer, loadNearOffers, loadComments} from './app-data/app-data';
import {setError, setAuthUser} from './app-process/app-process';
import {dropToken, saveToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {APIRoute, AppRoute, AuthorizationStatus, HTTP_CODE, TIMEOUT_SHOW_ERROR} from '../const';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import request from 'axios';
import {Review, Reviews, ServerReview} from '../types/reviews';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }

  },
);

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffer',
  async (id: number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      store.dispatch(loadOffer(null));
      errorHandle(error);
    }
  },
);

export const fetchOfferCommentsAction = createAsyncThunk(
  'data/fetchOfferComments',
  async (id: number) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk(
  'data/fetchNearOffers',
  async (id: number) => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadNearOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const responce = await api.get(APIRoute.Login);
      store.dispatch(setAuthUser(responce.data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }catch (error) {
      if (request.isAxiosError(error) && error.response?.status === HTTP_CODE.UNAUTHORIZED) {
        return;
      }
      errorHandle(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(setAuthUser(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const postCommentAction = createAsyncThunk(
  'user/postComment',
  async ({offerId, comment, rating}: ServerReview) => {
    try {
      await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
      store.dispatch(fetchOfferCommentsAction(Number(offerId)));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(setAuthUser(null));
    }catch (error) {
      errorHandle(error);
    }
  },
);
