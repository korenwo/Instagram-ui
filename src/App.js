import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { useEffect } from 'react';

import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import Feed from './Feed/Feed';

import { UserService } from './services/user.service';

import './App.scss';

function App() {
  const history = useHistory();

  useEffect(() => {
    UserService.me()
      .then(user => {
        if (!user) {
        }
      });
  }, [history]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact>
              <Feed />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
