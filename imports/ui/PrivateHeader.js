import React from 'react';
import history from './history';
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>

            <button onClick={() => {
                Accounts.logout();
                history.push('/');
            }}>Logout</button>
        </div>
    );
}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default PrivateHeader;
