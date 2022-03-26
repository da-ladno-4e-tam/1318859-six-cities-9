import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';
import FavoritesFooter from '../favorites-footer/favorites-footer';
import Header from '../header/header';
import {AppRoute} from '../../const';
import {CITY_NAMES} from '../../const';
import {useAppSelector} from '../../hooks';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {loadFavoriteOffers} from '../../store/app-data/app-data';

function FavoritesPage(): JSX.Element {
  const {favoriteOffers} = useAppSelector(({DATA}) => DATA);
  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction());

    return () => {
      store.dispatch(loadFavoriteOffers(null));
    };
  }, []);

  return (
    <div className={`page ${!favoriteOffers?.length ? 'page--favorites-empty' : ''}`}>
      <Header pageUrl={AppRoute.Favorites}/>
      {favoriteOffers?.length ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {CITY_NAMES.map((cityName) => <FavoritesLocationItem key={cityName} cityName={cityName} offers={favoriteOffers.filter((offer) => offer.city.name === cityName)}/>)}
              </ul>
            </section>
          </div>
        </main>
        :
        <FavoritesEmpty/>}
      <FavoritesFooter/>
    </div>
  );
}

export default FavoritesPage;
