import React from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

export default class AddLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            url: '',
            isOpen: false
        }
    }

    onSubmit(e) {
        e.preventDefault();
        
        const url = this.state.url;
        if (url) {
            Meteor.call('links.insert', url, (err) => {
                if (err) {
                    this.setState({error: err.reason, url: '', isOpen: true});
                } else {
                    this.handleModalClose();
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

    handleModalClose() {
        this.setState({
            isOpen: false,
            url: '', 
            error: ''
        });
    }

    render() {
        return (
            <div>
                <button className="button" onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
                <Modal 
                    className="boxed-view__box"
                    overlayClassName="boxed-view boxed-view--modal"
                    ariaHideApp={false} 
                    isOpen={this.state.isOpen} 
                    contentLabel="Add Link"
                    onAfterOpen={() => this.refs.url.focus()}
                    onRequestClose={this.handleModalClose.bind(this)}
                >
                    <h1>Add Link</h1>
                    {this.state.error ? <p className='error-message'>{this.state.error}</p> : undefined}
                    <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
                        <input 
                            type="text"
                            ref="url"
                            placeholder="URL"
                            value={this.state.url} 
                            onChange={this.onChange.bind(this)}
                        />
                        <button className="button">Add Link</button>
                        <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
                    </form>
                    
                </Modal>
            </div>
        );
    }
}              
                