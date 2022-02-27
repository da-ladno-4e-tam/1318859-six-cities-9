import {Offer, Offers} from '../../types/offers';
import MainCard from '../main-card/main-card';

type MainCardListProps = {
  offers: Offers;
  onListItemMouseEnterHandler(offer: Offer): void;
  onListItemMouseLeaveHandler(): void;
}

function MainCardsList({offers, onListItemMouseEnterHandler, onListItemMouseLeaveHandler}: MainCardListProps): JSX.Element {
  const onMouseEnterHandler = (offer: Offer) => {
    onListItemMouseEnterHandler(offer);
  };
  const onMouseLeaveHandler = () => {
    onListItemMouseLeaveHandler();
  };

  return (
    <>
      {offers.map((offer:Offer) => <MainCard offer={offer} key={offer.id} onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler}/>)}
    </>
  );
}

export default MainCardsList;
