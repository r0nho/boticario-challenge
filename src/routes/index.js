import React from 'react';
import history from 'utils/history';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RegisterPurchase from 'pages/RegisterPurchase';

const NotFoundRedirect = () => <Redirect to="/login" />;
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        window.localStorage.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !window.localStorage.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/dashboard/home', state: { from: props.location } }} />
        )
      }
    />
  );
};

export const RoutersApp = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/dashboard/home" component={Home} />
      <PrivateRoute path="/dashboard/register" component={RegisterPurchase} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="*" render={NotFoundRedirect} />
    </Switch>
  </Router>
);
