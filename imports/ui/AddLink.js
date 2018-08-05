import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            url: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        
        const url = this.state.url;
        if (url) {
            Meteor.call('links.insert', url, (err) => {
                if (err) {
                    this.setState({error: err.reason, url: ''});
                } else {
                    this.setState({error: '', url: ''});
                }
            });
            this.refs.url.value = '';
        }
    }

    onChange(e) {
        this.setState({
            error: '',
            url: e.target.value,
        })
    }

    render() {
        return (
            <div>
                {this.state.error ? <p className='error-message'>{this.state.error}</p> : undefined}
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input 
                        type="text"
                        ref="url"
                        placeholder="URL"
                        value={this.state.url} 
                        onChange={this.onChange.bind(this)}
                    />
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}              
                