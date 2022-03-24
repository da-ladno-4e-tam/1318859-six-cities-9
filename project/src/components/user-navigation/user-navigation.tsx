import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';

type UserNavigationProps = {
  pageUrl: AppRoute;
}

function UserNavigation({pageUrl}: UserNavigationProps): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const dispatch = useAppDispatch();

  const handleSignOut = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to={pageUrl} className="header__nav-link" onClick={handleSignOut}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to='/login' className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default UserNavigation;
