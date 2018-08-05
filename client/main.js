import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import {renderRoutes, onAuthChange } from '../imports/routes/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Session.set('showVisable', true);
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
