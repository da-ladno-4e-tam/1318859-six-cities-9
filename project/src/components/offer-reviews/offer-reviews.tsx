import CommentForm from '../comment-form/comment-form';
import OfferReview from '../offer-review/offer-review';
import {Review} from '../../types/reviews';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

function OfferReviews(): JSX.Element {
  const {authorizationStatus, currentOfferComments} = useAppSelector((state) => state);

  return (
    <section className="property__reviews reviews">
      {currentOfferComments
        ?
        <>
          <h2 className="reviews__title">
            Reviews &middot; <span className="reviews__amount">{currentOfferComments.length}</span>
          </h2>
          <ul className="reviews__list">
            {currentOfferComments.map((review: Review) => <OfferReview review={review} key={review.id}/>)}
          </ul>
        </>
        :
        <h2 className="reviews__title">
          No reviews
        </h2>}
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm/>}

    </section>
  );
}

export default OfferReviews;
