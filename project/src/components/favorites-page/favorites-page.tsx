import FavoritesLocationItem from '../favorites-location-item/favorites-location-item';
import FavoritesFooter from '../favorites-footer/favorites-footer';
import UserNavigation from '../user-navigation/user-navigation';

function FavoritesPage(): JSX.Element {

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <UserNavigation/>
          </div>
        </div>
      </header>

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
