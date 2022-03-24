import Header from '../header/header';
import {AppRoute} from '../../const';
import {Offer} from '../../types/offers';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';
import {useState} from 'react';
import MainCityList from '../main-city-list/main-city-list';
import MainSorting from '../main-sorting/main-sorting';
import {useAppSelector} from '../../hooks';
import {getSortedOffersList} from '../../const';

function MainPage(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const {city, cityOffers, sortType} = useAppSelector(({DATA}) => DATA);

  const onListItemMouseEnter = (offer: Offer) => {
    setActiveOffer(offer);
  };
  const onListItemMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="page page--gray page--main">
      <Header pageUrl={AppRoute.Main}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MainCityList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <MainSorting/>
              <div className="cities__places-list places__list tabs__content">
                <CardsList
                  offers={getSortedOffersList(sortType, cityOffers)}
                  onListItemMouseEnter={onListItemMouseEnter}
                  onListItemMouseLeave={onListItemMouseLeave}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map activeOffer={activeOffer} offers={cityOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
