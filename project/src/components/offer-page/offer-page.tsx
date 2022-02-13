import OfferOtherPlaces from '../offer-other-places/offer-other-places';
import OfferReviews from '../offer-reviews/offer-reviews';
import OfferHost from '../offer-host/offer-host';
import OfferFeatures from '../offer-features/offer-features';
import UserNavigation from '../user-navigation/user-navigation';

function OfferPage(): JSX.Element {

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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <OfferFeatures/>
              <OfferHost/>
              <OfferReviews/>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <OfferOtherPlaces/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
