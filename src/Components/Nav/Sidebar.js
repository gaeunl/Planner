import React from 'react';

const Sidebar = ()=>{
    return(
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
    )
}

export default Sidebar;