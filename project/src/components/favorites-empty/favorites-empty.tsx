import FavoritesFooter from '../favorites-footer/favorites-footer';
import Header from '../header/header';
import {AppRoute, AuthorizationStatus} from '../../const';

function FavoritesEmpty(): JSX.Element {

  return (
    <div className="page page--favorites-empty">
      <Header authorizationStatus={AuthorizationStatus.Auth} pageUrl={AppRoute.Favorites}/>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
      <FavoritesFooter/>
    </div>
  );
}

export default FavoritesEmpty;
