import {City, Offers as OffersType} from './types/offers';

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const RATINGS = ['5', '4', '3', '2', '1'];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

export const CITIES: City[] = [
  {
    'location': {
      'latitude': 48.85661,
      'longitude': 2.351499,
      'zoom': 13,
    },
    'name': 'Paris',
  },
  {
    'location': {
      'latitude': 50.938361,
      'longitude': 6.959974,
      'zoom': 13,
    },
    'name': 'Cologne',
  },
  {
    'location': {
      'latitude': 50.846557,
      'longitude': 4.351697,
      'zoom': 13,
    },
    'name': 'Brussels',
  },
  {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 13,
    },
    'name': 'Amsterdam',
  },
  {
    'location': {
      'latitude': 53.550341,
      'longitude': 10.000654,
      'zoom': 13,
    },
    'name': 'Hamburg',
  },
  {
    'location': {
      'latitude': 51.225402,
      'longitude': 6.776314,
      'zoom': 13,
    },
    'name': 'Dusseldorf',
  },
];

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Rooms = '/offer',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortType {
  Default = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  RatingDesc = 'Top rated first',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const getSortedOffersList = (sortType: SortType, offersList: OffersType) => {
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
