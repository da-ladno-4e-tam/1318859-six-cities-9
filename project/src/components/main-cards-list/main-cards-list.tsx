import {Offer, Offers} from '../../types/offers';
import MainCard from '../main-card/main-card';
import {useState} from 'react';

type MainCardListProps = {
  offers: Offers;
}

function MainCardsList({offers}: MainCardListProps): JSX.Element {
  const [, setActiveCard] = useState<Offer | null>(null);
  const onMouseEnterHandler = (offer: Offer) => {
    setActiveCard(offer);
  };
  const onMouseLeaveHandler = () => {
    setActiveCard(null);
  };

  return (
    <>
      {offers.map((offer:Offer) => <MainCard offer={offer} key={offer.id} onMouseEnterHandler={onMouseEnterHandler} onMouseLeaveHandler={onMouseLeaveHandler}/>)}
    </>
  );
}

export default MainCardsList;
