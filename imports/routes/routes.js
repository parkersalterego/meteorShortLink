import React from 'react';
import history from '../ui/history';
import {Router, Route, Switch} from 'react-router-dom';

// COMPONENTS
import Link from '../ui/Link';
import Login from '../ui/Login';
import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';

// authennticated page redirects
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
    if (isUnauthenticatedPage && isAuthenticated) {
      history.push('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
      history.push('/');
    }
}

// routes
export const renderRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup"  component={Signup} />
      <Route exact path="/links"  component={Link}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);