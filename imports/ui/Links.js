import React from 'react';
import { Redirect } from  'react-router-dom';


export default class Links extends React.Component {
    state = {
        toRoot: false,
    }
    logout() {
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