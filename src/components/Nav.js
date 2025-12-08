import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/photography">Photography</Link>
            <Link to="/resume">Resume</Link>
        </nav>
    )
}

//Link component is imported to create routes to each of the nav bar links

export default Nav;