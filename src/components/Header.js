// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src='/porsche.png' alt="Porsche Logo" className="logo"/>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/legacy">Legacy</Link></li>
                    <li><Link to="/models">Models</Link></li>
                    <li><Link to="/heritage">Heritage</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <span className="name">Avanish Gharat</span>
            </div>
        </header>
    );
}

export default Header;
