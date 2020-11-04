import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Containers/Homepage/Homepage';
import LoginPage from './components/Containers/LoginPage/LoginPage';
import RegisterPage from './components/Containers/RegisterPage/RegisterPage';
import AuthContext from './context/AuthContext';
import decode from 'jwt-decode';

const App = () => {

  const token = localStorage.getItem('token');
  const [authValue, setAuthValue] = useState({
    user: token ? decode(token) : null
  });

  if (token) {
    const decoded = decode(token);
    const expiration = new Date(decoded.exp * 1000);
    if (expiration < new Date()) {
      localStorage.removeItem('token');
      setAuthValue(false);
    }
  }

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ user: authValue, setLoginState: setAuthValue }}>
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/users/register" component={RegisterPage} />
            <Route path="/users/login" component={LoginPage} />
          </Switch>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
