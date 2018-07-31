import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// COMPONENTS
import Link from './Link';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';

const browserHistory = createBrowserHistory();
window.browserHistory = browserHistory;

export const renderRoutes = () => (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/"  component={Login}/>
        <Route exact path="/links" component ={Link}/>
        <Route exact path="/signup"  component={Signup}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
);
