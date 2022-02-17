import FavoritesFooter from '../favorites-footer/favorites-footer';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

function NotFoundPage(): JSX.Element {

  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth} pageUrl={null}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">404 Not Found</h1>
            <Link to='/'>На главную</Link>
          </section>
        </div>
      </main>
      <FavoritesFooter/>
    </div>
  );
}

export default NotFoundPage;
