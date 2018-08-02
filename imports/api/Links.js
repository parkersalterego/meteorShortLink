import Meteor from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

const meteor = Meteor.Meteor;

if (meteor.isServer) {
    meteor.publish('links', function() {
        return Links.find({userId: this.userId});
    });
};

meteor.methods({
    'links.insert'(url) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Links.insert({url, userId: this.userId});
    }
});
