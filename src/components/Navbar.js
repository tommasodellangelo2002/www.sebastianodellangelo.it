import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/assets/logo-navbar.png`} alt="Sebastiano's logo"/>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/works">WORKS</Link>
                <Link to="/contacts">CONTACT</Link>
            </div>
        </div>
    );
}
