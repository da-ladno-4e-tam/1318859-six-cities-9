import React from 'react';
import {FormEvent, useState} from 'react';
import {RATINGS} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postCommentAction} from '../../store/api-actions';
import {ServerReview} from '../../types/reviews';

function CommentForm(): JSX.Element {
  const {authUser, currentOfferComments, currentOffer} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });
  const fieldChangeHandle = (evt: { target: { name: any; value: any; }; }) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (commentData: ServerReview) => {
    dispatch(postCommentAction(commentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.review.length && authUser && currentOffer) {
      onSubmit({
        offerId: currentOffer.id.toString(),
        comment: formData.review,
        date: new Date().toDateString(),
        id: (currentOfferComments) ? currentOfferComments.length + 1 : 1,
        rating: Number(formData.rating),
        user: {
          avatarUrl: authUser.avatarUrl,
          id: authUser.id,
          isPro: authUser.isPro,
          name: authUser.name,
        },
      });
    }
    setFormData({rating: '', review: ''});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating) => (
          <React.Fragment key={`${rating}-stars`}>
            <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" checked={formData.rating === rating}/>
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>))}
      </div>
      <textarea onChange={fieldChangeHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formData.review || !formData.rating}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
