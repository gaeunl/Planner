import React, {useEffect} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import logo from '../../Capture.svg';
import Links from './Links';

const Navbar = () => {
    return(
        <nav className="nav-center">
            <div className="nav-header">
                <img className="logo" src={logo} alt="planner logo"></img>
                <button className="nav-toggle">
                    <GiHamburgerMenu/>
                </button>
            </div>
            <Links/>
            <ul className="menu-icon"></ul>
        </nav>
    )
}

export default Navbar;