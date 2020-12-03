import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage/Homepage';
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
import UsersRankingPage from './containers/UsersRankingPage/UsersRankingPage';
import Footer from './components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { login, setNotifications } from './redux/actions';
import socketIOClient from 'socket.io-client'; import { useEffect } from 'react';
;
export const socket = socketIOClient("http://localhost:4000")

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.loginState.isLogged);
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    dispatch(login(decode(accessToken)));
  }

  socket.on("connect", () => {
    if (accessToken) {
      const user = decode(localStorage.getItem('accessToken'))
      socket.emit('login', JSON.stringify(user));
    }
  });

  socket.on("notifications", (notifications) => {
    dispatch(setNotifications(notifications))
  });

  socket.on("new_jury_notifications", (notifications) => {
    dispatch(setNotifications(notifications))
  });

  socket.on("new_private_invitations", (notifications) => {
    dispatch(setNotifications(notifications))
  });

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch >
          <GuardedRoute exact path="/" auth={!isLoggedIn} component={LandingPage} redirectRoute={'/home'} />
          <GuardedRoute exact path="/users/register" auth={!isLoggedIn} component={RegisterPage} redirectRoute={'/home'} />
          <GuardedRoute exact path="/users/login" auth={!isLoggedIn} component={LoginPage} redirectRoute={'/home'} />
          <GuardedRoute exact path="/home" auth={isLoggedIn} component={HomePage} redirectRoute={'/'} />
          <GuardedRoute exact path="/profile" auth={isLoggedIn} component={ProfilePage} redirectRoute={'/'} />
          <GuardedRoute exact path="/contests" auth={isLoggedIn} component={AllContestsPage} redirectRoute={'/'} />
          <GuardedRoute exact path="/users/contests" auth={isLoggedIn} component={AllUserCurrentContestsPage} redirectRoute={'/'} />
          <GuardedRoute exact path="/users/ranking" auth={isLoggedIn} component={UsersRankingPage} redirectRoute={'/'} />
          <GuardedRoute path="/contests/:id" auth={isLoggedIn} component={SingleContestPage} redirectRoute={'/'} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
