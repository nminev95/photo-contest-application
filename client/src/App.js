import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Containers/Homepage/Homepage';
import LoginPage from './components/Containers/LoginPage/LoginPage';
import RegisterPage from './components/Containers/RegisterPage/RegisterPage';
import AuthContext from './context/AuthContext';
import decode from 'jwt-decode';
import GuardedRoute from './hoc/GuardedRoute';
import LandingPage from './components/Containers/LandingPage/LandingPage';

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
          <Switch>
            <GuardedRoute exact path="/" auth={!authValue.isLoggedIn} component={LandingPage} redirectRoute={'/home'} />
            <GuardedRoute exact path="/users/register" auth={!authValue.isLoggedIn} component={RegisterPage} redirectRoute={'/home'} />
            <GuardedRoute exact path="/users/login" auth={!authValue.isLoggedIn} component={LoginPage} redirectRoute={'/home'} />
            <GuardedRoute path="/home" auth={authValue.isLoggedIn} component={Homepage} redirectRoute={'/'} />
          </Switch>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
