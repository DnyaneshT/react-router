import React from 'react'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <h3>logo</h3>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation
