import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import PrivateRoute from '../private-route/private-route';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import NotFoundPage from '../not-found-page/not-found-page';

type AppScreenProps = {
  placesToStay: number;
}

function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage placesToStay={placesToStay}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<OfferPage/>}
        />
        <Route
          path="*"
          element={<NotFoundPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
