import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';
import FavoritesFooter from '../favorites-footer/favorites-footer';
import Header from '../header/header';
import {AppRoute} from '../../const';
import {CITY_NAMES} from '../../const';
import {useAppSelector} from '../../hooks';

function FavoritesPage(): JSX.Element {
  const {offers} = useAppSelector(({DATA}) => DATA);

  return (
    <div className="page">
      <Header pageUrl={AppRoute.Favorites}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITY_NAMES.map((cityName) => <FavoritesLocationItem key={cityName} cityName={cityName} offers={offers.filter((offer) => offer.city.name === cityName)}/>)}
            </ul>
          </section>
        </div>
      </main>
      <FavoritesFooter/>
    </div>
  );
}

export default FavoritesPage;
