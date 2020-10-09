import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Profile from "./components/profile/Profile";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <article>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </article>
      </div>
    );
  }
}

export default App;
