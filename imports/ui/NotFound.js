import React from 'react';
import { Link } from 'react-router-dom'

export default notFound = () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>404 Not Found</h1>
                <p>"He's dead Jim."</p>
                <Link to="/" className="button button--link">Head Home</Link>
            </div>
        </div>
    );
}