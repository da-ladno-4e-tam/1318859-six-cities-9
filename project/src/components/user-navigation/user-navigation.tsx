import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';

function UserNavigation(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {currentOffer, userData} = useAppSelector(({DATA}) => DATA);
  const offerId = currentOffer ? currentOffer.id : null;
  const dispatch = useAppDispatch();

  const handleSignOut = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction(offerId));
  };


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
              <div
                className="header__avatar-wrapper user__avatar-wrapper"
                style={{
                  backgroundImage: `url('${userData?.avatarUrl}')`,
                  borderRadius: '50%',
                }}
              >
              </div>
              <span className="header__user-name user__name">{userData?.email}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" onClick={handleSignOut}>
              <span className="header__signout">Sign out</span>
            </a>
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
