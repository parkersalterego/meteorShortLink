import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login to Short Link</h1>

                <p>Login form here</p>

                <Link to="/signup">Register</Link>
            </div>
        );
    }
}