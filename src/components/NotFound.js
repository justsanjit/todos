import React from 'react';
import {Link} from 'react-router-dom';


const NotFound = () => (
    <div className="wrapper">
        <div className="main">
            <div className="level">
                <Link to="/" className="level-item button back">Back</Link>
            </div>
            <div className="view-task">
                <h5>Oups! The page you are looking for does not exist. <Link to="/">Go to home page</Link></h5>
            </div>
        </div>
    </div>
);

export default NotFound;