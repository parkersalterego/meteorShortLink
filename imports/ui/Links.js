import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Redirect } from  'react-router-dom';
import history from './history';


export default class Links extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toRoot: false,
        }
    }

    componentWillMount() {
        if (!Meteor.userId()) {
            history.replace('/');
        }
    }

    logout() {
        Accounts.logout();
        this.setState({
            toRoot: true
        });
    }
    render() {
        if (this.state.toRoot === true) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <h1>Your Links</h1>
    
                    <button onClick={() => this.logout()}>Logout</button>
                </div>
            );
        }
    }
}