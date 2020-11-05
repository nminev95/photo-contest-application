import { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './containers/Homepage/Homepage';
import LoginPage from './containers/LoginPage/LoginPage';
import RegisterPage from './containers/RegisterPage/RegisterPage';
import AuthContext from './context/AuthContext';
import decode from 'jwt-decode';
import GuardedRoute from './hoc/GuardedRoute';
import LandingPage from './containers/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './containers/ProfilePage/ProfilePage';

const App = () => {

  const token = localStorage.getItem('token');
  const [authValue, setAuthValue] = useState({
    isLoggedIn: token ? true : false,
    user: token ? decode(token) : null
  });

  if (token) {
    const decoded = decode(token);
    const expiration = new Date(decoded.exp * 1000); /// setTimout !!
    if (expiration < new Date()) {
      localStorage.removeItem('token');
      setAuthValue(false);
    }
  }

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ ...authValue, setLoginState: setAuthValue }}>
          <Navbar />
          <Switch>
            <GuardedRoute exact path="/" auth={!authValue.isLoggedIn} component={LandingPage} redirectRoute={'/home'} />
            <GuardedRoute exact path="/users/register" auth={!authValue.isLoggedIn} component={RegisterPage} redirectRoute={'/home'} />
            <GuardedRoute exact path="/users/login" auth={!authValue.isLoggedIn} component={LoginPage} redirectRoute={'/home'} />
            <GuardedRoute exact path="/profile" auth={authValue.isLoggedIn} component={ProfilePage} redirectRoute={'/home'} />
            <GuardedRoute path="/home" auth={authValue.isLoggedIn} component={Homepage} redirectRoute={'/'} />
            
          </Switch>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
