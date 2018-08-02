import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => {
    const email = user.emails[0].address;

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      throw new Meteor.Meteor.Error(400, 'Invalid Email Address');
    }
      
    return true;
  });