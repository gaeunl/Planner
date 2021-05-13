import React, {useEffect} from 'react';
import { links } from './data';
import {GiHamburgerMenu} from 'react-icons/gi'

import logo from './Capture.svg'

const Navbar = () => {
    return(
        <nav className="nav-center">
            <div className="nav-header">
                <img className="logo" src={logo} alt="planner logo"></img>
                <button className="nav-toggle">
                    <GiHamburgerMenu/>
                </button>
            </div>
            <div className="nav-links show-container">
                <ul className="links">
                    <li>
                        <a href='#'>home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>To-do List</a>
                    </li>
                </ul>
            </div>
            <ul className="menu-icon"></ul>
        </nav>
    )
}

export default Navbar;