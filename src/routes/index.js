import React from 'react';
import history from 'utils/history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';

const NotFoundRedirect = () => <Redirect to="/login" />;

const PrivateRoute = ({ component: Component, isLoggedIn }) => {
  return <Route render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export const RoutersApp = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute isLoggedIn={false} path="/dashboard" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="*" render={NotFoundRedirect} />
    </Switch>
  </Router>
);
