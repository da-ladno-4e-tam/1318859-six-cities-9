import {Review} from '../../types/reviews';
import {MONTHS} from '../../const';

type OfferReviewProps = {
  review: Review;
}

function OfferReview({review}: OfferReviewProps): JSX.Element {
  const ratingWidth = String(20 * Math.round(review.rating));
  const date = new Date(Date.parse(review.date));
  const yearString = date.getFullYear().toString();
  const month = date.getMonth();
  const monthString = ((date.getMonth() + 1) > 9) ? (date.getMonth() + 1).toString() : `0${(date.getMonth() + 1).toString()}`;
  const dayString = date.getDate().toString();

  return (
    <li className="reviews__item" key={review.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={`${yearString}-${monthString}-${dayString}`}>{`${MONTHS[month]} ${yearString}`}</time>
      </div>
    </li>
  );
}

export default OfferReview;
