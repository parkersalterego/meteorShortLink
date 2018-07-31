import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
    render() {
    return (
      <div>
        <p>Signup Component</p>

        <p>Register Form Here</p>

        <Link to="/">Already have an account?</Link>
      </div>
    );
    }
  }