import { Meteor } from 'meteor/meteor';
import  { WebApp } from 'meteor/webapp';
import { Links } from '../imports/api/Links';
import moment from 'moment';

import '../imports/api/users';
import '../imports/api/Links';

Meteor.startup(() => {
  let momentNow = moment();
  console.log(momentNow.format('h:mma'));
  

  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    link 
      ? (res.statusCode = 302,
        res.setHeader('Location', link.url),
        res.end(), 
        Meteor.call('links.trackVisit', _id))
      : next();
  });

});
