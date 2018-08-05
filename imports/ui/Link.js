import React from 'react';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksList from './LinksList';
import LinksListFilters from './LinksListFilters';

const Link = () => {
    return (
        <div>
            <PrivateHeader title="Your Links"/>
            <LinksListFilters/>
            <LinksList/>
            <AddLink/>
        </div>
    );
}

export default Link;
