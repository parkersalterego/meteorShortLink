import React from 'react';
import history from './history';

export default class AddLink extends React.Component {
    onLogout() {
        Accounts.logout();
        history.push('/');
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={() => this.onLogout()}>Logout</button>
            </div>
        )
    }
}