import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
        }
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
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error ? <p className='error-message'>{this.state.error}</p> : undefined}
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}              
                