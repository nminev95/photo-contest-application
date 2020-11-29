import { BrowserRouter as Router, Switch } from 'react-router-dom';
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
import PhaseTwoContestsPage from './containers/PhaseTwoContestsPage/PhaseTwoContestsPage';
import FinishedContestsPage from './containers/FinishedContestsPage/FinishedContestsPage';
import AllUserCurrentContestsPage from './containers/AllUserCurrentContestsPage/AllUserCurrentContestsPage';
import UsersRankingPage from './containers/UsersRankingPage/UsersRankingPage';
import { useSelector, useDispatch } from 'react-redux';
import { login, setNotifications } from './redux/actions';
import socketIOClient from "socket.io-client";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loginState.isLogged);
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    dispatch(login(decode(accessToken)));
  }

  const socket = socketIOClient("http://localhost:4000")
  
  socket.on("notifications", (notifications) => {
    dispatch(setNotifications(notifications))
  });

  socket.on("connect", () => {
    if (accessToken) {
      const user = decode(localStorage.getItem('accessToken'))
      socket.emit('login', JSON.stringify(user));
    }
  });

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
          <GuardedRoute exact path="/contests/phase/2" auth={isLoggedIn} component={PhaseTwoContestsPage} redirectRoute={'/'} />
          <GuardedRoute exact path="/contests/phase/3" auth={isLoggedIn} component={FinishedContestsPage} redirectRoute={'/'} />
          <GuardedRoute exact path="/users/contests" auth={isLoggedIn} component={AllUserCurrentContestsPage} redirectRoute={'/'} />
          <GuardedRoute exact path="/users/ranking" auth={isLoggedIn} component={UsersRankingPage} redirectRoute={'/'} />
          <GuardedRoute path="/contests/:id" component={SingleContestPage} auth={isLoggedIn} redirectRoute={'/'} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
