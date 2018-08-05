import Meteor from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import moment from 'moment';

export default class LinksListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            justCoppied: false,
        }
    }

    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);

        this.clipboard.on('success', () => {
            this.setState({justCoppied: true})
            setTimeout(() => this.setState({ justCoppied: false }), 1000);
        }).on('error', () => {
            console.error('Unable to copy link');
        });
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    renderStats() {
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;

        if (typeof(this.props.lastVisitedAt) === 'number') {
            visitedMessage = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`;
        }

        return (
            <p>{this.props.visitedCount} {visitMessage} - {visitedMessage}</p>
        )
    }

    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visable.toString()}</p>
                {this.renderStats()}
                <button ref="copy" data-clipboard-text={this.props.shortUrl}>
                    {this.state.justCoppied ? 'Copied' : 'Copy'}
                </button>
                <button onClick={() => {
                    Meteor.Meteor.call('links.setVisibility', this.props._id, this.props.visable === true ? false : true);
                }}>
                    {this.props.visable ? 'Hide' : 'Unhide'}
                </button>
            </div>
        );
    }
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    visable: PropTypes.bool.isRequired,
    visitedCount: PropTypes.number.isRequired,
    lastVisitedAt: PropTypes.number,
};