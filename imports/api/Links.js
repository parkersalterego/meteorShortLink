import Meteor from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

const meteor = Meteor.Meteor;

if (meteor.isServer) {
    meteor.publish('links', function() {
        return Links.find({});
    });
};

meteor.methods({
    'links.insert'(url) {
        if (!this.userId) {
            throw new meteor.Error('not-authorized');
        } else if (!url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/)) {
            throw new meteor.Error(400, 'Your link must be a valid url and contain the protocol (i.e. https://)');
        }

        Links.insert({
            _id: shortid.generate(),
            userId: this.userId,
            url, 
            visable: true,
        });
    },
    'links.setVisibility'(_id ,visable) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        } else if (typeof(_id) !== 'string' && _id.length < 1) {
            throw new Meteor.Error('invalid-id');
        } else {
            Links.update(
                {
                _id: _id,
                 userId: this.userId
                }, {
                    $set: {visable: visable}
                }
            );
        }
    }
});
