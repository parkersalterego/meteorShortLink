import React from 'react';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

const Link = () => {
    return (
        <div>
            <PrivateHeader title="Your Links"/>
            <AddLink/>
        </div>
    );
}

export default Link;
