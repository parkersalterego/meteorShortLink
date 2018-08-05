import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import {renderRoutes, onAuthChange } from '../imports/routes/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

// stateless functional component
const MyComponent = (props) => {
  return (
    <div>
      <h1>My Component {props.name}</h1>
    </div>
  );
}

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
