import OfferOtherPlacesCard from '../offer-other-places-card/offer-other-places-card';

function OfferOtherPlaces(): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OfferOtherPlacesCard/>
        <OfferOtherPlacesCard/>
        <OfferOtherPlacesCard/>
      </div>
    </section>
  );
}

export default OfferOtherPlaces;
