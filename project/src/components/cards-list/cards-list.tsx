import {Offer, Offers} from '../../types/offers';
import Card from '../card/card';

type CardsListProps = {
  offers: Offers | null;
  isMain?: boolean;
  onListItemMouseEnter(offer: Offer): void;
  onListItemMouseLeave(): void;
}

function CardsList({offers, isMain, onListItemMouseEnter, onListItemMouseLeave}: CardsListProps): JSX.Element {
  const onMouseEnterHandler = (offer: Offer) => {
    onListItemMouseEnter(offer);
  };
  const onMouseLeaveHandler = () => {
    onListItemMouseLeave();
  };

  return (
    <>
      {offers && offers.map((offer:Offer) => <Card offer={offer} key={offer.id} onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler} isMain={isMain}/>)}
    </>
  );
}

export default CardsList;
