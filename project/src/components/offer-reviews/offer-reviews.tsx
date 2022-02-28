import CommentForm from '../comment-form/comment-form';
import OfferReview from '../offer-review/offer-review';
import {Review, Reviews} from '../../types/reviews';

type OfferReviewsProps = {
  reviews: Reviews;
}

function OfferReviews({reviews}: OfferReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      {reviews.length
        ?
        <h2 className="reviews__title">
          Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
        </h2>
        :
        <h2 className="reviews__title">
          No reviews
        </h2>}
      <ul className="reviews__list">
        {reviews.map((review: Review) => <OfferReview review={review} key={review.id}/>)}
      </ul>
      <CommentForm/>
    </section>
  );
}

export default OfferReviews;
