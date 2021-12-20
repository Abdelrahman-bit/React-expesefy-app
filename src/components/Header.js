import React from 'react';
import {NavLink} from 'react-router-dom'


const Header = () => (
    <header>
        <h1>Expencive</h1>
        <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/creat">creat</NavLink></li>
            <li><NavLink to="/help">help</NavLink></li>
        </ul>
    </header>
)

export default Header;