import UserNavigation from '../user-navigation/user-navigation';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type HeaderProps = {
  pageUrl: AppRoute;
}

function Header({pageUrl}: HeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {pageUrl !== AppRoute.Main
              ?
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
              :
              <a className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>}
          </div>
          {pageUrl !== AppRoute.SignIn &&
          <UserNavigation/>}
        </div>
      </div>
    </header>
  );
}

export default Header;
