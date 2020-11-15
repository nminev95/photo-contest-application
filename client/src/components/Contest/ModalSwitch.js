import { useSelector } from "react-redux";
import GuardedRoute from "../../hoc/GuardedRoute";
import { useLocation, Switch } from 'react-router-dom';
import SingleContestPage from '../../containers/SingleContestPage/SingleContestPage';
import ViewPhotoFullsize from './ViewPhotoFullsize'

const ModalSwitch = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const isLoggedIn = useSelector(state => state.loginState.isLogged);

  return (
    <>
      <Switch location={background || location}>
        <GuardedRoute path={["/contests/:id", "/entries/:id"]} children={<SingleContestPage />} auth={isLoggedIn} redirectRoute={'/home'} />
      </Switch>
      <GuardedRoute exact path="/contests/:id/entries/:id" component={ViewPhotoFullsize} auth={isLoggedIn} redirectRoute={'/home'} />
    </>
  )
}

export default ModalSwitch;