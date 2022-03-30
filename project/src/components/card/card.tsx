import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoriteStatusAction} from '../../store/api-actions';
import {MouseEvent} from 'react';
import {redirectToRoute} from '../../store/action';

type CardProps = {
  offer: Offer;
  isMain?: boolean;
  onMouseEnterHandler(offer: Offer): void;
  onMouseLeaveHandler(): void;
}

function Card({offer, isMain, onMouseEnterHandler, onMouseLeaveHandler}: CardProps): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const bookmarkActiveClass = offer.isFavorite ? 'place-card__bookmark-button--active' : '';
  const ratingWidth = String(20 * Math.round(offer.rating));
  const dispatch = useAppDispatch();

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if(authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteStatusAction({offerId: offer.id.toString(), isFavorite: !offer.isFavorite}));
    } else {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  };

  return (
    <article
      key={offer.id}
      className={`${isMain ? 'cities__place-' : 'near-places__'}card place-card`}
      onMouseEnter={() => onMouseEnterHandler(offer)}
      onMouseLeave={() => onMouseLeaveHandler()}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${isMain ? 'cities' : 'near-places'}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Rooms}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${bookmarkActiveClass}`} type="button" onClick={handleClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Rooms}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
