import CardsList from '../cards-list/cards-list';
import OfferReviews from '../offer-reviews/offer-reviews';
import Header from '../header/header';
import {AppRoute, AuthorizationStatus, MAX_OFFER_IMAGES} from '../../const';
import Map from '../map/map';
import {MouseEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {
  changeFavoriteStatusAction,
  fetchNearOffersAction,
  fetchOfferAction,
  fetchOfferCommentsAction
} from '../../store/api-actions';
import {store} from '../../store';
import {loadComments, loadNearOffers, loadOffer} from '../../store/app-data/app-data';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import {redirectToRoute} from '../../store/action';

function OfferPage(): JSX.Element {
  const {nearOffers, currentOffer} = useAppSelector(({DATA}) => DATA);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {id} = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const bookmarkActiveClass = currentOffer?.isFavorite ? 'property__bookmark-button--active' : '';
  const mapOffers = nearOffers && [...nearOffers];
  if (currentOffer) {
    mapOffers?.push(currentOffer);
  }

  useEffect(() => {
    if(id) {
      store.dispatch(fetchOfferAction(Number(id)));
      store.dispatch(fetchOfferCommentsAction(Number(id)));
      store.dispatch(fetchNearOffersAction(Number(id)));

      return () => {
        store.dispatch(loadOffer(undefined));
        store.dispatch(loadNearOffers(null));
        store.dispatch(loadComments(null));
      };
    }
  }, [id]);

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if(authorizationStatus === AuthorizationStatus.Auth) {
      if (currentOffer) {
        dispatch(changeFavoriteStatusAction({offerId: currentOffer.id.toString(), isFavorite: !currentOffer.isFavorite}));
      }
    } else {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  };

  const ratingWidth = currentOffer && String(100 * (currentOffer.rating / 5));

  if(currentOffer === undefined) {
    return <LoadingScreen/>;
  } else if (currentOffer === null) {
    return <NotFoundPage/>;
  }

  return (
    <div className="page">
      <Header pageUrl={AppRoute.Room}/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentOffer.images.slice(0, MAX_OFFER_IMAGES).map((image) =>
                (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Studio"/>
                  </div>
                ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                currentOffer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={`property__bookmark-button button ${bookmarkActiveClass}`} type="button" onClick={handleClick}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingWidth}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {currentOffer.maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    currentOffer.goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${currentOffer.host.isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <OfferReviews/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={mapOffers} activeOffer={currentOffer}/>
          </section>
        </section>
        <div className="container">

          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList offers={nearOffers}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
