import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

export default class LinksListFilters extends React.Component {

    constructor(props) { 
        super(props);

        this.state = {
            showVisable: false,
        }
    }

    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            this.setState({ showVisable: Session.get('showVisable')});
        });
    }

    componentWillUnmount() {
        this.linksTracker.stop();
    }

    render() {
        return (
            <label>
                <input 
                    checked={!this.state.showVisable}
                    onChange={(e) => {
                        Session.set('showVisable', !e.target.checked)
                    }} 
                    type="checkbox"
                />
                show hidden links
            </label>
        )
    }
}

