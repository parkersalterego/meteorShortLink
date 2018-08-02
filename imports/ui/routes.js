import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from './history';

// COMPONENTS
import Links from './Links';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';

export const unauthenticatedPages = ['/', '/signup'];

export const authenticatedPages = ['/links'];

export const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/"  component={Login}/>
      <Route exact path="/links"  component={Links}/>
      <Route exact path="/signup"  component={Signup}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);
