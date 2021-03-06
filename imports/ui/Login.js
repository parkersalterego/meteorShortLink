import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
// import history from '../ui/history';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
        }
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

        Meteor.loginWithPassword({email}, password, (err) => {
            if (err) {
                this.setState({error : 'Unable to login, please check that email and password are entered correctly'});
            } else {
                this.setState({error : ''});
                history.push('/links');
            }
        });
    }
    // register() {
    //     history.push('/signup');
    // }
    render() {
        return (
            <div className="boxed-view">

            <div className="boxed-view__box">
                <h1>Short Link</h1>

                {this.state.error ? <p className="error-message">{this.state.error}</p> : undefined}

                <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="Email"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button className="button">Login</button>
                </form>

                {/* <a href="#" onClick={this.register}>Need an account?</a> */}
                <Link to="/signup">Need an account?</Link>
            </div>

            </div>
        );
    }
}
