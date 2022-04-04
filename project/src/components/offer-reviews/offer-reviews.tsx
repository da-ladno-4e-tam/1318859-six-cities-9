import CommentForm from '../comment-form/comment-form';
import OfferReview from '../offer-review/offer-review';
import {Review} from '../../types/reviews';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, MAX_OFFER_COMMENTS} from '../../const';

function OfferReviews(): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {currentOfferComments} = useAppSelector(({DATA}) => DATA);

  return (
    <section className="property__reviews reviews">
      {currentOfferComments
        ?
        <>
          <h2 className="reviews__title">
            Reviews &middot; <span className="reviews__amount">{currentOfferComments.length}</span>
          </h2>
          <ul className="reviews__list">
            {[...currentOfferComments]
              .sort((nextReview, prevReview) => prevReview.id - nextReview.id)
              .slice(0, MAX_OFFER_COMMENTS)
              .map((review: Review) => <OfferReview review={review} key={review.id}/>)}
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
