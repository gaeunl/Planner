import React, {useRef, useEffect} from 'react';
import {links} from './data';
import {Link} from 'react-router-dom';

const Links = (props) => {

    const linksRef = useRef(null);
    const linksContainerRef = useRef(null);

    useEffect(()=>{
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if(props.show){
            linksContainerRef.current.style.height = `${linkHeight}px`
        }else{
            linksContainerRef.current.style.height = '0px'
        }
    },[props])

    return(
        <div className='nav-links' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
                {links.map((link) => {
                    const{url, text, id} = link;
                    return(
                        <Link to={url} id={id}>{text}</Link>
                    )
                })}
            </ul>
        </div>
    )

};

export default Links;