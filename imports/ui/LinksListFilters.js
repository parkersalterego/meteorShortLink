import React from 'react';
import { Session } from 'meteor/session';

const LinksListFilters = () => {
    return (
        <label>
            <input onChange={(e) => Session.set('showVisable', !e.target.checked)} type="checkbox"/>
            show hidden links
        </label>
    )
};

export default LinksListFilters;
