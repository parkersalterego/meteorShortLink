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
            throw new meteor.Error('not-authorized');
        } else if (!url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/)) {
            throw new meteor.Error(400, 'Your link must be a valid url and contain the protocol (i.e. https://)');
        }

        Links.insert({url, userId: this.userId});
    }
});
