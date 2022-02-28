import {Offer, Offers} from '../../types/offers';
import MainCard from '../main-card/main-card';

type MainCardListProps = {
  offers: Offers;
  onListItemMouseEnter(offer: Offer): void;
  onListItemMouseLeave(): void;
}

function MainCardsList({offers, onListItemMouseEnter, onListItemMouseLeave}: MainCardListProps): JSX.Element {
  const onMouseEnterHandler = (offer: Offer) => {
    onListItemMouseEnter(offer);
  };
  const onMouseLeaveHandler = () => {
    onListItemMouseLeave();
  };

  return (
    <>
      {offers.map((offer:Offer) => <MainCard offer={offer} key={offer.id} onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler}/>)}
    </>
  );
}

export default MainCardsList;
