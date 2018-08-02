import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Redirect } from  'react-router-dom';
import history from './history';

import { Links } from '../api/Links';

import LinksList from './LinksList';

export default class Link extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toRoot: false,
        }
    }

    onLogout() {
        Accounts.logout();
        this.setState({
            toRoot: true
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const url = this.refs.url.value.trim();
        if (url) {
            Meteor.call('links.insert', url);
            // Links.insert({url, userId: Meteor.userId()});
            this.refs.url.value = '';
        }
    }

    render() {
        if (this.state.toRoot === true) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <h1>Your Links</h1>
    
                    <button onClick={() => this.onLogout()}>Logout</button>

                    <p>Add Link</p>
                    <LinksList/>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="text" ref="url" placeholder="URL"/>
                        <button>Add Link</button>
                    </form>

                </div>
            );
        }
    }
}