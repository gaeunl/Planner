import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import logo from '../../Capture.svg';
import Links from './Links';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return(
        <nav className="nav-center">
            <div className="nav-header">
                <Link to="/">
                    <img className="logo" src={logo} alt="planner logo"></img>
                </Link>
                <button className="nav-toggle" onClick = {()=>setShowLinks(!showLinks)}>
                    <GiHamburgerMenu/>
                </button>
            </div>
            <Links show={showLinks}/>
            {console.log(setShowLinks)}
            <ul className="menu-icon"></ul>
        </nav>
    )
}

export default Navbar;