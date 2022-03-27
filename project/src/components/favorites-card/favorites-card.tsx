import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks';
import {changeFavoriteStatusAction} from '../../store/api-actions';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {
  const ratingWidth = String(100 * offer.rating / 5);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeFavoriteStatusAction({offerId: offer.id.toString(), isFavorite: !offer.isFavorite}));
  };

  return (
    <article key={offer.id} className="favorites__card place-card">
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Rooms}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button place-card__bookmark-button--active" type="button" onClick={handleClick}>
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

export default FavoritesCard;
