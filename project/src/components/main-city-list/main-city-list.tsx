import {useAppDispatch, useAppSelector} from '../../hooks';
import {CITIES} from '../../const';
import {changeCity} from '../../store/app-data/app-data';


function MainCityList(): JSX.Element {
  const currentCity = useAppSelector(({DATA}) => DATA.city);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city) => (
            <li className="locations__item" key={city.name}>
              <a
                className={`locations__item-link tabs__item ${(city.name === currentCity.name) ? 'tabs__item--active' : ''}`}
                href="#"
                onClick={() => dispatch(changeCity(city))}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default MainCityList;
