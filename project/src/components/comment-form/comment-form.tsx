import {useState} from 'react';
import {ratings} from '../../const';

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });
  const fieldChangeHandle = (evt: { target: { name: any; value: any; }; }) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => (
          <>
            <input onChange={fieldChangeHandle} className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" checked={formData.rating === rating}/>
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>))}
      </div>
      <textarea onChange={fieldChangeHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
