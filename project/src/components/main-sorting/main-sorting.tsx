import {SortType} from '../../const';
import {changeSortType} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';

function MainSorting(): JSX.Element {
  const {sortType} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>{sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortType).map((sort) => (
          <li key={sort} className={`places__option ${(sort === sortType) ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => dispatch(changeSortType(sort))}>
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default MainSorting;
