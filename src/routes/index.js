import React from 'react';
import history from 'utils/history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Details from 'pages/Details';

const NotFoundRedirect = () => <Redirect to='/' />

export const RoutersApp = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route path='*' render={NotFoundRedirect} />
    </Switch>
  </Router>
);
