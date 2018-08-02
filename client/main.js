import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { renderRoutes, authenticatedPages, unauthenticatedPages } from '../imports/ui/routes';
import { Tracker } from 'meteor/tracker';
import history from '../imports/ui/history';

// authennticated page redirects
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

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
