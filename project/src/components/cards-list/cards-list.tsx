import {Offer, Offers} from '../../types/offers';
import Card from '../card/card';

type CardsListProps = {
  offers: Offers;
  onListItemMouseEnter(offer: Offer): void;
  onListItemMouseLeave(): void;
}

function CardsList({offers, onListItemMouseEnter, onListItemMouseLeave}: CardsListProps): JSX.Element {
  const onMouseEnterHandler = (offer: Offer) => {
    onListItemMouseEnter(offer);
  };
  const onMouseLeaveHandler = () => {
    onListItemMouseLeave();
  };

  return (
    <>
      {offers.map((offer:Offer) => <Card offer={offer} key={offer.id} onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler}/>)}
    </>
  );
}

export default CardsList;
