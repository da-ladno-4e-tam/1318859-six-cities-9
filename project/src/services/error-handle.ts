import request from 'axios';
import {store} from '../store';
import {setError} from '../store/app-process/app-process';
import {clearErrorAction} from '../store/api-actions';
import {ErrorType} from '../types/error';
import {HttpCode} from '../const';

export const handleError = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleError(response.data.error);
        break;
      case HttpCode.Unauthorized:
        handleError(response.data.error);
        break;
      case HttpCode.NotFound:
        handleError(response.data.error);
        break;
    }
  }
};
