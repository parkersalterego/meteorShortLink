import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import history from '../imports/ui/history';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

// COMPONENTS
import Links from '../imports/ui/Links';
import Login from '../imports/ui/Login';
import Signup from '../imports/ui/Signup';
import NotFound from '../imports/ui/NotFound';

// authennticated page redirects
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.push('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/');
  }
});

// routes
const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup"  component={Signup} />
      <Route exact path="/links"  component={Links}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
