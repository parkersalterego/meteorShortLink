import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { renderRoutes } from '../imports/ui/routes';

Meteor.startup(() => {
  ReactDOM.render(renderRoutes(), document.getElementById('app'));
});
