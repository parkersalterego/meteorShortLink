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
            error: '',
        }
    }

    onLogout() {
        Accounts.logout();
        history.push('/');
    }

    onSubmit(e) {
        e.preventDefault();

        const url = this.refs.url.value.trim();
        if (url) {
            Meteor.call('links.insert', url, (err) => {
                if (err) {
                    console.log(err);
                    this.setState({error: err.reason});
                } else {
                    this.setState({error: ''});
                }
            });
            // Links.insert({url, userId: Meteor.userId()});
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <h1>Your Links</h1>

                <button onClick={() => this.onLogout()}>Logout</button>

                {this.state.error ? <p className='error-message'>{this.state.error}</p> : undefined}

                <LinksList/>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>

            </div>
        );
    }
}