import React from 'react';
import {links} from './data';

const Links = () => {
    return(
        <div className="nav-links show-container">
            <ul className="links">
                {links.map((link) => {
                const{url, text, id} = link;
                return(
                    <li>
                        <a href={url}>{text}</a>
                    </li>
                )
            })}
            </ul>
        </div>
    )

};

export default Links;