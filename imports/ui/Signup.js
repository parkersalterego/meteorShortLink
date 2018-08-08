import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';
import history from './history';

'meteor/accounts-base'

export default class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  componentWillMount() {
    if (Meteor.userId()) {
        history.replace('/links');
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 7 || password.length > 15) {
      return this.setState({error: 'Password must between 7 and 15 characters'});
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });

  }

  render() {
  return (
    <div className="boxed-view">

    <div className="boxed-view__box">
      <h1>Join Short Link</h1>

      {this.state.error ? <p className='error-message'>{this.state.error}</p> : undefined}

      <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
        <input type="email" ref="email" name="email" placeholder="Email"/>
        <input type="password" ref="password" name="password" placeholder="Password"/>
        <button className="button">Create Account</button>
      </form>
      <Link to="/">Already have an account?</Link>
    </div>

    </div>
  );
  }
}