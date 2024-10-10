import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About</Link>
            <Link className="links" to="/user/Milani">User Profile</Link>
        </nav>
    );
}

export default Navbar;
