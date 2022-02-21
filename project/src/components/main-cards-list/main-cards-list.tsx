import {Offers} from '../../types/offers';
import MainCard from '../main-card/main-card';

type MainCardListProps = {
  offers: Offers;
}

function MainCardsList({offers}: MainCardListProps): JSX.Element {

  return (
    <>
      {offers.map((offer) => <MainCard offer={offer} key={offer.id}/>)}
    </>
  );
}

export default MainCardsList;
