import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// COMPONENTS
import Links from './Links';
import Login from './Login';
import Signup from './Signup';
import NotFound from './NotFound';

export const renderRoutes = () => (
    <Router>
      <Switch>
        <Route exact path="/"  component={Login}/>
        <Route exact path="/links"  component={Links}/>
        <Route exact path="/signup"  component={Signup}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
);
