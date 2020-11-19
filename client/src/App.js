import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';
import decode from 'jwt-decode';
import GuardedRoute from './hoc/GuardedRoute';
import LandingPage from './containers/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import SingleContestPage from './containers/SingleContestPage/SingleContestPage';
import AllContestsPage from './containers/AllContestsPage/AllContestsPage';
import AllUserCurrentContestsPage from './containers/AllUserCurrentContestsPage/AllUserCurrentContestsPage';
import AllUserPastContests from './containers/AllUserPastContests/AllUserPastContests';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './redux/actions';
import ViewPhotoFullsize from './components/Contest/ViewPhotoFullsize';
import ModalSwitch from './components/Contest/ModalSwitch';
// const socket = io.connect(BASE_URL);

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loginState.isLogged);
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(login(decode(token)));
  }
  
  // const location = useLocation();
  // const background = location.state && location.state.background;
  // if (token) {
  //   const decoded = decode(token);
  //   const expiration = new Date(decoded.exp * 1000); /// setTimout !!
  //   if (expiration < new Date()) {
  //     localStorage.removeItem('token');
  //     setAuthValue(false);
  //   }
  // }

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch >
            <GuardedRoute exact path="/" auth={!isLoggedIn} component={LandingPage} redirectRoute={'/home'} /> 
            <GuardedRoute exact path="/users/register" auth={!isLoggedIn} component={RegisterPage} redirectRoute={'/home'} />
            <GuardedRoute exact path="/users/login" auth={!isLoggedIn} component={LoginPage} redirectRoute={'/home'} />
            <GuardedRoute path="/home" auth={isLoggedIn} component={HomePage} redirectRoute={'/'} />
            <GuardedRoute exact path="/profile" auth={isLoggedIn} component={ProfilePage} redirectRoute={'/'} />
            <GuardedRoute exact path="/contests" auth={isLoggedIn} component={AllContestsPage} redirectRoute={'/'} />
            <GuardedRoute exact path="/users/contests" auth={isLoggedIn} component={AllUserCurrentContestsPage} redirectRoute={'/'} />
            <GuardedRoute exact path="/users/past-contests" auth={isLoggedIn} component={AllUserPastContests} redirectRoute={'/'} />
            <GuardedRoute path={"/contests/:id"} component={SingleContestPage} auth={isLoggedIn} redirectRoute={'/'} />           
          </Switch>
        </Router>
    </div>
  );
}

export default App;
