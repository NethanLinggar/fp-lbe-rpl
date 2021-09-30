import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
        <ul>
            <Link style={navStyle} to='/'>
              <h1>*nama website*</h1>
            </Link>
        </ul>
        <ul className="nav-links">
            <Link style={navStyle} to='/about'>
              <li>About</li>
            </Link>
            <Link style={navStyle} to='/trading'>
              <li>Trading</li>
            </Link>
            <Link style={navStyle} to='/markets'>
              <li>Markets</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;