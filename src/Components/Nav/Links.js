import React from 'react';
import {links} from './data';

const Links = (props) => {
    return(
        <div className={`${props.show?'nav-links show-container': 'nav-links'}`}>
            <ul className="links">
                {links.map((link) => {
                    const{url, text, id} = link;
                    return(
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

};

export default Links;