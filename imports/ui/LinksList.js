import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/Links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {
constructor(props) {
     super(props);

     this.state = {
         links: [],
     }
}

    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({}).fetch();
            this.setState({links});
        });
    }

    componentWillUnmount() {
        this.linksTracker.stop();
    }

    renderLinksListItems() {
        return  this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} {...link} shortUrl={shortUrl}/>
        });
    }
    render() {
        return (
            <div>
                <p>This is the links list</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
};