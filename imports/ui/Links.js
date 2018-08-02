import React from 'react';
import { Redirect } from  'react-router-dom';
import { Acounts } from 'meteor/accounts-base'


export default class Links extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toRoot: false,
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