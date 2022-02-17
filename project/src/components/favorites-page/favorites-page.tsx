import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';
import FavoritesFooter from '../favorites-footer/favorites-footer';
import Header from '../header/header';
import {AppRoute, AuthorizationStatus} from '../../const';

function FavoritesPage(): JSX.Element {

  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth} pageUrl={AppRoute.Favorites}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesLocationItem/>
              <FavoritesLocationItem/>
            </ul>
          </section>
        </div>
      </main>
      <FavoritesFooter/>
    </div>
  );
}

export default FavoritesPage;
