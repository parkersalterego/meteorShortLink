import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at 

  Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      return true;
    } else {
      throw new Meteor.Error(400, 'Invalid Email Address');
    }
  });
});
